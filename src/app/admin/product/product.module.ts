import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatFormField} from '@angular/material/form-field'
import { FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatOptionModule, MatSelectModule } from '@angular/material';
@NgModule({
  declarations: [ProductItemComponent, ProductListComponent, ProductAddComponent],
  imports: [
    CommonModule,
     FormControlName,
     FormControl,
     FormGroup,
    RouterModule,
    MatFormField, 
    FormBuilder,
    Validators,
     MatButtonModule,
     MatCardModule,
     MatInputModule,
     MatSelectModule,
     MatFormField
  ]
})
export class ProductModule { }
