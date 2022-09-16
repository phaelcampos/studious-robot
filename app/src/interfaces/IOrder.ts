//file types/order.ts

import {BasicProduct, Product} from "./IProduct";
import {BasicProvider, Provider} from "./IProvider";

export interface BasicOrder {
    product: BasicProduct,
    product_quantity: number
}

export interface Order {
    provider_id: BasicProvider
    order_id: string
    products: BasicOrder[]
}

export interface uniqueItemOrder {
    order_id: string
    product_id: BasicProduct,
    product_quantity: number
}
