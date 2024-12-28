import 'dotenv/config';
import express from 'express';
import userRouter from './src/routes/userRoutes.js'
import productRouter from './src/routes/productRoutes.js'
import purchaseRouter from './src/routes/purchasesRoutes.js'

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/purchase', purchaseRouter);

app.listen(4000, () => console.log('API de E-commerce está online'));
