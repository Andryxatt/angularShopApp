import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item/category-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CategoryItemComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CategoryModule { }
