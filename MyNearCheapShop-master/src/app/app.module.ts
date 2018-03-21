import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import{ FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { ProductsComponent } from './component/products/products.component';
import { AccountComponent } from './component/account/account.component';
import { RegisterComponent } from './component/register/register.component';
import { FooterComponent } from './component/footer/footer.component';
import { MapComponent } from './component/map/map.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DataentryComponent } from './component/dataentry/dataentry.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guards';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProductsComponent,
    AccountComponent,
    RegisterComponent,
    FooterComponent,
    MapComponent,
    DashboardComponent,
    DataentryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
