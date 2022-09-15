//file types/order.ts

import {BasicProduct, Product} from "./IProduct";
import {BasicProvider, Provider} from "./IProvider";

export interface BasicOrder {
    product: BasicProduct,
    provider: BasicProvider,
    productQuantity: number
}

export interface Order extends BasicOrder {
    orderId: number
}

export interface OrderWithDetails extends Order{
    product: Product,
    provider: Provider,
}
