import {Order} from "../interfaces/IOrder";
import axios from 'axios';

export default class FirstProvider {
    async createOrder(order: Order, provider: string) {
        const payload = await this.formatPayload(order)
        const result = await axios.post(
            provider + "/carts",
            payload
        );
        return result.status
    }

    async formatPayload(order: Order) {
        const payload = {
            products: []
        }
        for (let item in order.products) {
            const product = order.products[item]
            let teste = {
                productId: product.product,
                quantity: product.product_quantity
            }
            // @ts-ignore
            payload.products.push(teste)
        }
        return payload
    }

    async getProduct(id: string, provider: string) {
        const result = await axios.get(
            provider + "/products/"+id
        );
        return result.data
    }
}
