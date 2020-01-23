import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'
import { RoutingModule } from '../routing/routing.module';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
@NgModule({
  declarations: [AdminComponent],
  imports: [
    RouterModule,
    MatTabsModule,
    RoutingModule, 
    CommonModule
  ],
  providers: []
})
export class AdminModule { }
