import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PropertyInfoTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
