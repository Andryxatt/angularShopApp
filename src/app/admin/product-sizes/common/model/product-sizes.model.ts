import { Product } from "src/app/admin/product/common/model/product.model";
import { Size } from "src/app/admin/size/common/model/size.model";

export interface ProductSizes{
    id:string
    product?:Product
    idProduct?:string
    size?:Size
    idSize?:string
}