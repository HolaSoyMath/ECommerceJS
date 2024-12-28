
import BaseRepository from "./BaseRepository.js";

const BASE_TABLE = 'users';
class UserRepository extends BaseRepository{
    async getAll() {
        try{
            const results = await super.getAll(BASE_TABLE, ['id', 'name', 'surname', 'email']);
            return results;
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try{
            const result = await super.getById(BASE_TABLE, ['id', 'name', 'surname', 'email'], id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async insertOne(valuesArray) {
        try{
            await super.insertOne(BASE_TABLE, ['name', 'surname', 'email'], valuesArray);
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepository;