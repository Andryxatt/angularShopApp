import { Product } from "src/app/admin/product/common/model/product.model";
import { ProductCategory } from "src/app/admin/product-category/common/model/product-category.model";

export interface Category{
      id: string,
      name?: string
      products?:ProductCategory[]
}
