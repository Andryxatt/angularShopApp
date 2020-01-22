import { Brand } from "../model/brand.model";
import { Observable } from "rxjs";


export abstract class BrandContract {
    abstract brands: Brand[];
  
    abstract get(id: string): Observable<Brand>;
  
    abstract add(): void;
  
    abstract remove(id: string): void;
  }