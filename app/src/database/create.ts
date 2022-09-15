import {BasicOrder, Order, OrderWithDetails} from "../interfaces/IOrder";
import MySQL from "../database/dbConnection";
import { OkPacket, RowDataPacket } from "mysql2";

export const createOrder = async (order: BasicOrder) => {
    const db = new MySQL();
    const con = await db.getConnection();
    await con.connect();
    const queryString = "INSERT INTO ProductOrder (product_id, provider_id, product_quantity) VALUES (?, ?, ?)"
    const result = await con.query(
        queryString,
        [order.product, order.provider, order.productQuantity]
    );
    con.end();
    return result
};
