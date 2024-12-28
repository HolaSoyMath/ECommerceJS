import BaseRepository from "./BaseRepository";

const BASE_TABLE = 'purchaseproduct'
class PurchaseProductRepository extends BaseRepository{
    async insertOne(valuesArray) {
        try {
            await super.insertOne(BASE_TABLE, ['purchase_id', 'product_id', 'product_amount'], valuesArray);
        } catch (error) {
            throw error;
        }
    }
}

export default PurchaseProductRepository;