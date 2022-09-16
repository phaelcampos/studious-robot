import {createOrder, getOrder, getProvider} from "../database/create";
import {Order} from "../interfaces/IOrder";
import {BasicProvider} from "../interfaces/IProvider";
import MySQL from "../database/dbConnection";
import FirstProvider from "../business/firstProvider"

export default class Orders {
  async createOrder(order: Order) {
    const providerResult = await this.veirfyProvider(order.provider_id);
    if (providerResult == undefined) return {statuCode: 400,message:"Fornecedor não encontrado"};

    if (providerResult[0].id === 1){
      const provider = new FirstProvider();
      const result = await provider.createOrder(order,providerResult[0].site);
      if (result == 200){
        await this.saveOrder(order)
      }
    }
    return {statuCode: 200,message:{order_id:order.order_id}}
  };

  async saveOrder(order: Order){
    const db = new MySQL();
    const con = await db.getConnection();
    await con.connect();
    for(let item in order.products){
      const product = order.products[item]
      const uniqueItem = {
        order_id: order.order_id,
        product_id: product.product,
        product_quantity: product.product_quantity
      }
      await createOrder(uniqueItem, con)
    }
    con.end();
    return order.order_id
  }

  async veirfyProvider(provider_id: any) {
    const new_provider_id = parseInt(provider_id)
    const db = new MySQL();
    const con = await db.getConnection();
    await con.connect();
    const result = await getProvider(new_provider_id,con);
    con.end();
    if (result.length == 0) return
    return result
  };

  async getOrder(order: string){
    const db = new MySQL();
    const con = await db.getConnection();
    await con.connect();
    const result = await getOrder(order, con)
    con.end();
    return {statuCode: 200,message:{order_id:result}}
  }

  async getProduct(order: string, provider_id:any){
    const providerResult = await this.veirfyProvider(provider_id);
    if (providerResult == undefined) return {statuCode: 400,message:"Fornecedor não encontrado"};

    const provider = new FirstProvider();
    const result = await provider.getProduct(order,providerResult[0].site);
    return {statuCode: 200,message:result}
  }
}
