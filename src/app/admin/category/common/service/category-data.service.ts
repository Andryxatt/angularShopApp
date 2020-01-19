import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.model';




@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
  private url = "/api/categories";
 
  constructor(private http: HttpClient) {
  }

  getCategories() {
      return this.http.get(this.url);
  }

  createCategory(category: Category) {
      return this.http.post(this.url, category);
  }
  updateCategory(category: Category) {

      return this.http.put(this.url + '/' + category.id, category);
  }
  deleteCategory(id: string) {
      return this.http.delete(this.url + '/' + id);
  }
}
