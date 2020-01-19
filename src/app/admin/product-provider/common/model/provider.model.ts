import { Product } from "src/app/admin/product/common/model/product.model";

export interface ProviderProduct{
    id:string
    name:string
    email:string
    phone:string
    webPageUrl?:string
    products?:Product[]
}