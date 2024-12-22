import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RentComponent } from './components/rent/rent.component';
import { BuyComponent } from './components/buy/buy.component';
import { ListPropertyComponent } from './components/list-property/list-property.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { PropertyOverviewComponent } from './components/property-overview/property-overview.component';
import { PropertyAddressComponent } from './components/property-address/property-address.component';
import { PropertyPhotosComponent } from './components/property-photos/property-photos.component';
import { PropertyContactComponent } from './components/property-contact/property-contact.component';

const routes: Routes = [
  {path: 'home',
    component: HomeComponent,
    children: [
      { path: 'rent', component: RentComponent },
      { path: 'buy', component: BuyComponent },
      { path: 'list-property', component: ListPropertyComponent }
    ]
  },
  { path: 'property/:id', component: PropertyDetailComponent,
    children: [
      {path: 'overview', component: PropertyOverviewComponent },
      { path: 'address', component: PropertyAddressComponent },
      { path: 'photos', component: PropertyPhotosComponent },
      { path: 'contact', component: PropertyContactComponent }
    ]
   },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
