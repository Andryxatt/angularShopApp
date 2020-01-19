import { ProductSizes } from "src/app/admin/product-sizes/common/model/product-sizes.model";

export interface Size{
    id:string
    sizeUA?:string
    sizeUSA?:string
    sizeOther?:string
    sizeProducts?:ProductSizes[]
}