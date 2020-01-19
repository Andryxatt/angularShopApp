import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../model/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private readonly url = "/api/brands";
 
  constructor(private http: HttpClient) {
  }
  getBrands() {
      return this.http.get(this.url);
  }

  createBrand(brand: Brand) {
      return this.http.post(this.url, brand);
  }
  updateBrand(brand: Brand) {

      return this.http.put(this.url + '/' + brand.id, brand);
  }
  deleteBrand(id: string) {
      return this.http.delete(this.url + '/' + id);
  }
}
