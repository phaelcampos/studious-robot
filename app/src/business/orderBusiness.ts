import { createOrder } from "../database/create";
import { BasicOrder } from "../interfaces/IOrder";

export default class Orders {
  async createOrder(order: BasicOrder) {
    console.log(order)
    const result = await createOrder(order);
};
}
