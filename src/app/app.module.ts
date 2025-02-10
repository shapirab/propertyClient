import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuyComponent } from './components/buy/buy.component';
import { RentComponent } from './components/rent/rent.component';
import { ListPropertyComponent } from './components/list-property/list-property.component';
import { PropertyComponent } from './components/property/property.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { PropertyInfoTabsComponent } from './components/property-info-tabs/property-info-tabs.component';
import { PropertyOverviewComponent } from './components/property-overview/property-overview.component';
import { PropertyAddressComponent } from './components/property-address/property-address.component';
import { PropertyPhotosComponent } from './components/property-photos/property-photos.component';
import { PropertyContactComponent } from './components/property-contact/property-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuyComponent,
    RentComponent,
    ListPropertyComponent,
    PropertyComponent,
    PropertiesComponent,
    PropertyDetailComponent,
    PropertyInfoTabsComponent,
    PropertyOverviewComponent,
    PropertyAddressComponent,
    PropertyPhotosComponent,
    PropertyContactComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
