import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { BrandComponent } from '../admin/brand/brand/brand.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoryItemComponent } from '../admin/category/category-item/category-item.component';
import { AdminComponent } from '../admin/admin.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'admin', component: AdminComponent, children: [
      {
        path: 'brands', component: BrandComponent
      },
      {
        path: 'categories', component: CategoryItemComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }

