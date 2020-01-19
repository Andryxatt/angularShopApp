import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/admin/brand/common/model/brand.model';
import { BrandService } from '../common/service/brand.service';
import { Observable } from 'rxjs';
import { BrandModule } from '../brand.module';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  ngOnInit(): void {
    this.loadBrands();
  }
  brand: Brand | undefined;   // изменяемый бренд
  brands: Brand[];                // массив брендов
  tableMode: boolean = true;          // табличный режим
  constructor(private dataService: BrandService) { }


  // получаем данные через сервис
  loadBrands() {
    this.dataService.getBrands()
      .subscribe((data: Brand[]) => this.brands = data);
  }
  // сохранение данных
  save() {
    if (this.brand.id == null) {
      this.dataService.createBrand(this.brand)
        .subscribe((data: Brand) => this.brands.push(data), err=> console.log);
    } else {
      this.dataService.updateBrand(this.brand)
        .subscribe(data => this.loadBrands());
    }
    this.cancel();
  }
  editBrand(b: Brand) {
    this.brand = b;
  }
  cancel() {
    this.brand = undefined;
    this.tableMode = true;
  }
  delete(p: Brand) {
    this.dataService.deleteBrand(p.id)
      .subscribe(data => this.loadBrands());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }

}
