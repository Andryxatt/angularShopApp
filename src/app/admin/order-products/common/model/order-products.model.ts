import { Product } from "src/app/admin/product/common/model/product.model";
import { Order } from "src/app/admin/order/common/model/order.model";

export interface OrderProducts{
    id:string
    idProduct?:string
    product?:Product
    count?:number
    idOrder?:string
    order?:Order
}