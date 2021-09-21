import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShopComponent } from './add-shop/add-shop.component';
import { AddCatComponent } from './add-cat/add-cat.component';



@NgModule({
  declarations: [
    AddShopComponent,
    AddCatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopOnboardingModule { }
