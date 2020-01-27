import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.model';
import { RestAbstract } from 'src/app/admin/rest.abstract';
import { Brand } from 'src/app/admin/brand/common/model/brand.model';




@Injectable({
  providedIn: 'root'
})
export class CategoryDataService extends RestAbstract<Category> {
  protected readonly path: string = 'categories';
  private readonly url = "/api/brands";
  constructor(protected readonly http: HttpClient) {
    super();
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
