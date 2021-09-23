import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BeSellerComponent } from './be-seller/be-seller.component';
import { FreeQuoteComponent } from './free-quote/free-quote.component';
import { DwnldAppComponent } from './dwnld-app/dwnld-app.component';
import { CallComponent } from './call/call.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BeSellerComponent,
    FreeQuoteComponent,
    DwnldAppComponent,
    CallComponent,
    WhatsappComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [HeaderComponent,FooterComponent]
})
export class SharedModule { }
