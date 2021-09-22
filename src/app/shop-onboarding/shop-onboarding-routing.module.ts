import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatComponent } from './add-cat/add-cat.component';
import { AddShopComponent } from './add-shop/add-shop.component'

const routes: Routes = [
  {path:'add-cat',component:AddCatComponent},
  {path:'add-shop',component:AddShopComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopOnboardingRoutingModule { }
