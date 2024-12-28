import { Router } from "express";
import PurchaseProductRepository from "../repository/PurchaseProductRepository";

const router = Router();

router.post('/', async (req, res) => {
    const {body} = req;
    const columnsArray = ['purchase_id', 'product_id', 'product_amount'];
    const valuesArray = columnsArray.reduce((acc, currentValue) => {
        acc.push(body[currentValue]);
        return acc;
    }, [])
    await new PurchaseProductRepository().insertOne(valuesArray);
    res.status(201).send('Carrinho criado!')
})

export default router;