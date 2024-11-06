import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RentComponent } from './components/rent/rent.component';
import { BuyComponent } from './components/buy/buy.component';
import { ListPropertyComponent } from './components/list-property/list-property.component';

const routes: Routes = [
  {path: 'home',
    component: HomeComponent,
    children: [
      { path: 'rent', component: RentComponent },
      { path: 'buy', component: BuyComponent },
      { path: 'list-property', component: ListPropertyComponent }
    ]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
