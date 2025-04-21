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
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UnauthorizedComponent } from './components/shared/unauthorized/unauthorized.component';
import { BasicInfoComponent } from './components/addProperty/basic-info/basic-info.component';
import { PricingFormComponent } from './components/addProperty/pricing-form/pricing-form.component';
import { PropertyAddressFormComponent } from './components/property-address-form/property-address-form.component';
import { PropertyDetailsFormComponent } from './components/property-details-form/property-details-form.component';



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
    LoginDialogComponent,
    UnauthorizedComponent,
    BasicInfoComponent,
    PricingFormComponent,
    PropertyAddressFormComponent,
    PropertyDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    BsDropdownModule,
    MatTabsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
