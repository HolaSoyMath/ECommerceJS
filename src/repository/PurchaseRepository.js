import BaseRepository from "./BaseRepository.js";

const BASE_TABLE = 'purchases';
class PurchaseRepository extends BaseRepository{
    async getAll(){
        try {
            const results = await super.getAll(BASE_TABLE, ['*']);
            return results;
        } catch (error) {
            throw error;
        }
    }
    
    async insertOne(valuesArray) {
        try {
            await super.insertOne(BASE_TABLE, ['purchase_date', 'user_id', 'delivery_address'], valuesArray);
        } catch (error) {
            throw error;
        }
    }
}

export default PurchaseRepository;