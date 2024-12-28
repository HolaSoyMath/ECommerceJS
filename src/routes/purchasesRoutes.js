import { Router } from "express";
import PurchaseRepository from "../repository/PurchaseRepository.js";

const router = Router();

router.get('/', async (req,res) => {
    const result = await new PurchaseRepository().getAll();
    res.status(200).send(result);
})

router.post('/', async (req, res) => {
    const {body} = req;
    const columnsArray = ['purchase_date', 'user_id', 'delivery_address'];
    const valuesArray = columnsArray.reduce((acc, currentValue) => {
        acc.push(body[currentValue]);
        return acc;
    }, []);
    await new PurchaseRepository().insertOne(valuesArray);
    res.status(201).send('New purchase created');
})

export default router;