import {uniqueItemOrder, Order} from "../interfaces/IOrder";
import MySQL from "../database/dbConnection";
import {BasicProvider} from "../interfaces/IProvider";

export const createOrder = async (order: uniqueItemOrder, con: any) => {
    const queryString = "INSERT INTO ProductOrder (order_id, product_id, product_quantity) VALUES (?, ?, ?)"
    const result = await con.query(
        queryString,
        [order.order_id, order.product_id, order.product_quantity]
    );
    return result
};

export const getProvider = async (provider_id: any, con: any) => {
    const queryString = "SELECT * FROM Provider where id = ?"
    const result = await con.query(
        queryString,
        [provider_id]
    );
    return result[0]
};

export const getOrder = async (order_id: string, con: any) => {
    const queryString = "SELECT * FROM ProductOrder where order_id = ?"
    const result = await con.query(
        queryString,
        [order_id]
    );
    return result[0]
};
