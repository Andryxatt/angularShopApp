import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { BrandComponent } from '../admin/brand/brand/brand.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoryItemComponent } from '../admin/category/category-item/category-item.component';
import { AdminComponent } from '../admin/admin.component';
import { ProductListComponent } from '../admin/product/product-list/product-list.component';
import { ProviderComponent } from '../admin/product-provider/provider/provider.component';
import { OrderlistComponent } from '../admin/order/orderlist/orderlist.component';
import { ProductAddComponent } from '../admin/product/product-add/product-add.component';
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'admin', component: AdminComponent, children: [
      {
        path: 'brands', component: BrandComponent
      },
      {
        path: 'categories', component: CategoryItemComponent
      },
      {
        path: 'products', component: ProductListComponent, children:[
          {path: 'add', component: ProductAddComponent}
        ]
      },
      {
        path:'providers', component: ProviderComponent
      },
      {
        path:'orders', component: OrderlistComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }

