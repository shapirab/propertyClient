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
import { AuthGuard } from './guards/auth.guard';
import { UnauthorizedComponent } from './components/shared/unauthorized/unauthorized.component';
import { BasicInfoComponent } from './components/addProperty/basic-info/basic-info.component';
import { PricingFormComponent } from './components/addProperty/pricing-form/pricing-form.component';
import { PropertyAddressFormComponent } from './components/property-address-form/property-address-form.component';
import { PropertyDetailsFormComponent } from './components/property-details-form/property-details-form.component';

const routes: Routes = [
  {path: 'home',
    component: HomeComponent,
    children: [
      { path: 'rent', component: RentComponent },
      { path: 'buy', component: BuyComponent },
      { path: 'list-property', component: ListPropertyComponent,
        children: [
          { path: 'basic-info', component: BasicInfoComponent },
          { path: 'pricing', component: PricingFormComponent},
          // { path: 'basic-info', component: BasicInfoComponent, canActivate: [AuthGuard] },
          // { path: 'pricing', component: PricingFormComponent, canActivate: [AuthGuard] },
          { path: 'address-form', component: PropertyAddressFormComponent, canActivate: [AuthGuard] },
          { path: 'details-form', component: PropertyDetailsFormComponent, canActivate: [AuthGuard] },

        ],
       }
    ]
  },
  { path: 'property/:id', component: PropertyDetailComponent,
    children: [
      {path: 'overview', component: PropertyOverviewComponent },
      { path: 'address', component: PropertyAddressComponent },
      { path: 'photos', component: PropertyPhotosComponent },
      { path: 'contact', component: PropertyContactComponent, canActivate: [AuthGuard] }
    ]
   },
   {path: 'unauthorized', component: UnauthorizedComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
