import 'dotenv/config';
import express from 'express';
import pool from './Repository/db.js';
import BaseRepository from './Repository/BaseRepository.js';

const app = express();

app.get('/users', async (req, res) => {
    const result = await new BaseRepository().getAll('users')
    res.status(200).send(result);
});

app.listen(4000, () => console.log('API de E-commerce está online'));
