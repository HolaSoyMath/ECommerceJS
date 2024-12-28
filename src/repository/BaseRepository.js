import pool from './db.js'

class BaseRepository{
    async getAll(table, columnsArray){
        try{
            const results = (await pool.query(`SELECT ${columnsArray.join()} FROM ${table}`)).rows;
            return results;
        } catch (error) {
            throw error;
        }
    }

    async getById(table, columnsArray, id){
        try{
            const queryText = `SELECT ${columnsArray.join()} FROM ${table} WHERE id = $1`
            const result = (await pool.query(queryText, [id])).rows[0];
            return result;
        } catch (error) {
            throw error;
        }
    }

    async insertOne(table, columnsArray, valuesArray){
        const connection = await pool.connect();
        try{
            let flagsArray = new Array(columnsArray.length).keys();
            flagsArray = Array.from(flagsArray).map((index) => `$${index+1}`);
            const flagsString = flagsArray.join();
            const queryText = `INSERT INTO ${table} (${columnsArray.join()}) VALUES (${flagsString})`;

            await connection.query('BEGIN TRANSACTION');
            await connection.query(queryText, valuesArray);
            await connection.query('COMMIT');

        } catch (error) {
            await connection.query('ROLLBACK');
            throw error;
        } finally {
            connection.release();
        }
    }
}

export default BaseRepository;