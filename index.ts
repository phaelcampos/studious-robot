import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Orders from "./app/src/business/orderBusiness";
import bodyParser from "body-parser";
import {v4 as uuid4} from 'uuid';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/order/:id', async (req: Request, res: Response) => {
    const id =req.params.id;
    const orderBusiness = new Orders();
    const result = await orderBusiness.getOrder(id);
    res.statusCode = result.statuCode;
    res.send(result.message);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.post('/create',async (req: Request, res: Response) => {
    const id = <string>uuid4();
    const order = {
        order_id : id,
        provider_id: req.body.provider_id,
        products: req.body.order,
    }
    const orderBusiness = new Orders();
    const result = await orderBusiness.createOrder(order);
    res.statusCode = result.statuCode;
    res.send(result.message);
});

app.get('/product/:provider_id/:product_id', async (req: Request, res: Response) => {
    const product_id = req.params.product_id;
    const provider_id = req.params.provider_id;
    const orderBusiness = new Orders();
    const result = await orderBusiness.getProduct(product_id,provider_id);
    res.statusCode = result.statuCode;
    res.send(result.message);
});
