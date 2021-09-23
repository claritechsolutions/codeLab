import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DwnldAppComponent } from './dwnld-app/dwnld-app.component';
import { RegisterComponent } from './register/register.component'


const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'login', component:LoginComponent},
  {path:'download', component:DwnldAppComponent},
  {path:'register' , component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
