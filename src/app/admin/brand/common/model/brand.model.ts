import { Product } from "src/app/admin/product/common/model/product.model";

export interface Brand{
     id: string
     name?: string
     products?:Product[]
}