import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Orders from "./app/src/business/orderBusiness";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server is running.');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.post('/',async (req: Request, res: Response) => {
    console.log(req.body)
    const order  ={
        product: req.body.product_id,
        provider: req.body.provider_id,
        productQuantity: req.body.productQuantity
    }
    const orderBusiness = new Orders();
    const result = await orderBusiness.createOrder(order);
    res.send('Express + TypeScript Server is running.');
});
