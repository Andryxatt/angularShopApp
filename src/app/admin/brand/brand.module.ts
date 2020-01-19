import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrandComponent } from './brand/brand.component';
import { BrandService } from './common/service/brand.service';

@NgModule({
  declarations: [BrandComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [BrandService]
})
export class BrandModule { }
