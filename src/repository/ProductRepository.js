import BaseRepository from "./BaseRepository.js";

const BASE_TABLE = 'products';
class ProductRepository extends BaseRepository{
    async getAll() {
        try{
            const results = await super.getAll(BASE_TABLE, ['id', 'name', 'size', 'price_in_cents']);
            return results;
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try{
            const result = await super.getById(BASE_TABLE, ['*'], id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async insertOne(valuesArray){
        try{
            await super.insertOne(BASE_TABLE, ['name', 'price_in_cents', 'size'], valuesArray);
        } catch {
            throw error;
        }
    }
}

export default ProductRepository;