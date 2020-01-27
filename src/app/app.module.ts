import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { BrandComponent } from './admin/brand/brand/brand.component';
import { CategoryItemComponent } from './admin/category/category-item/category-item.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './admin/product/product-list/product-list.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProviderComponent } from './admin/product-provider/provider/provider.component';
import { OrderlistComponent } from './admin/order/orderlist/orderlist.component';
import { ProductAddComponent } from './admin/product/product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandComponent,
    CategoryItemComponent, 
    AdminComponent,
    ProductListComponent,
    NavMenuComponent, 
    ProviderComponent,
    OrderlistComponent, ProductAddComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
 bootstrap:[AppComponent]
})
export class AppModule { }
