import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/admin/category/common/model/category.model';
import { CategoryDataService } from '../common/service/category-data.service';
@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  ngOnInit(): void {
    this.loadCategories();
  }
  category: Category   // изменяемый бренд
  categories: Category[];                // массив брендов
  tableMode: boolean = true;          // табличный режим
  constructor(private dataService: CategoryDataService) { }


  // получаем данные через сервис
  loadCategories() {
    this.dataService.getCategories()
      .subscribe((data: Category[]) => this.categories = data);
  }
  // сохранение данных
  save() {
    if (this.category.id == null) {
      this.dataService.createCategory(this.category)
        .subscribe((data: Category) => this.categories.push(data));
    } else {
      this.dataService.updateCategory(this.category)
        .subscribe(data => this.loadCategories());
    }
    this.cancel();
  }
  editCategory(b: Category) {
    this.category = b;
  }
  cancel() {
    this.tableMode = true;
  }
  delete(p: Category) {
    this.dataService.deleteCategory(p.id)
      .subscribe(data => this.loadCategories());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }

}
