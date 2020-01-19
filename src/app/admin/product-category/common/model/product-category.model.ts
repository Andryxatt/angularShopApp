import { Category } from "src/app/admin/category/common/model/category.model";
import { Product } from "src/app/admin/product/common/model/product.model";

export interface ProductCategory{
    id:string
    idProduct?:string
    idCategory?:string
    category?:Category
    product?:Product
}