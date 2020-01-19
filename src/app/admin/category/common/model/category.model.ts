import { Product } from "src/app/admin/product/common/model/product.model";

export interface Category{
      id: string,
      categoryName?: string
      products?:Product[]
}
