import { Url } from "url";

export interface Photo{
    photoId: string,
    path?: string,
    url?: Url,
    idProduct?:string

}