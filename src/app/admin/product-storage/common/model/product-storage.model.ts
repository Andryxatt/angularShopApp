import { Product } from "src/app/admin/product/common/model/product.model";

export interface ProductStorage{
    id:string
    name:string
    price:number
    products:Product[]
}