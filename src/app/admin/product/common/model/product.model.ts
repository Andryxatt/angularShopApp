import { Photo } from "src/app/admin/photo/common/model/photo.model";
import { SizeModule } from "src/app/admin/size/size.module";
import { Brand } from "src/app/admin/brand/common/model/brand.model";
import { ProductStorage } from "src/app/admin/product-storage/common/model/product-storage.model";
import { ProviderProduct } from "src/app/admin/product-provider/common/model/provider.model";
import { ProductSizes } from "src/app/admin/product-sizes/common/model/product-sizes.model";
import { Category } from "src/app/admin/category/common/model/category.model";
import { ProductCategory } from "src/app/admin/product-category/common/model/product-category.model";

export interface Product {
    id: string
    model?: string
    priceBy?: number
    photos?:Photo[]
    priceSale?:number
    brand?:Brand
    idBrand?:string
    storage?:ProductStorage
    idStorage?:string
    provider?:ProviderProduct
    idProvider?:string
    productSizes?:ProductSizes[]
    productCategorys?:ProductCategory[]


}