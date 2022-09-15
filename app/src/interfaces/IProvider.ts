//file types/customer.ts

export interface BasicProvider {
    id: number,
}

export interface Provider extends BasicProvider{
    name: string,
}
