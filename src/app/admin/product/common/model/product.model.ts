import { Photo } from "src/app/admin/photo/common/model/photo.model";

export interface Product {
    id?: string
    model?: string
    priceBy?: number
    photos?:Photo[]
}