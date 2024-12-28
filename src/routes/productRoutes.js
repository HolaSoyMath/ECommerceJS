import { Router } from "express";
import ProductRepository from "../repository/ProductRepository.js";

const router = Router();

router.get('/', async (req, res) => {
    const result = await new ProductRepository().getAll();
    res.status(200).send(result)
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const result = await new ProductRepository().getById(id);
    res.status(200).send(result);
})

router.post('/', async (req, res) => {
    const { body } = req;
    const columnsArray = ['name', 'price_in_cents', 'size'];
    const valuesArray = columnsArray.reduce((acc, currentColumn) => {
        acc.push(body[currentColumn]);
        return acc;
    }, []);
    await new ProductRepository().insertOne(valuesArray);
    return res.status(201).send('Product created');
})

export default router;