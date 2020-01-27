import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../common/model/product.model';
import { Category } from '../../category/common/model/category.model';
import { Brand } from '../../brand/common/model/brand.model';
import { CategoryDataService } from '../../category/common/service/category-data.service';
import { BrandService } from '../../brand/common/service/brand.service';
import {MatFormField} from '@angular/material/form-field'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm!: FormGroup;
  book: Product;
  categories: Observable<Category[]>;
  brands: Observable<Brand[]>;
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryDataService,
    private brandService: BrandService,
  ) {
    this.productForm = formBuilder.group({
      title: '',
      description: '',
      author: null,
      pages: 0,
      screen: new FormControl(null, [Validators.required]),
    });
  }

  submit() {
    console.log(this.productForm.value);
  }

  ngOnInit(): void {
   // this.brands = this.brandService.getBrands();
    this.categories = this.categoryService.list();
  }
}
