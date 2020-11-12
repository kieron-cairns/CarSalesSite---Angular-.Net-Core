/* Import car list and car card components */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CarCardComponent } from './car/car-card/car-card.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AllCarsService } from './services/all-cars.service';
import { AddCarComponent } from './car/add-car/add-car.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';

//Website routing section

const appRoutes: Routes = [
  //Route to index
  {path: '', component: CarListComponent},
  //Route to add-car page & service
  {path: 'add-car', component: AddCarComponent},

  {path: 'rent-car', component: CarListComponent},

  //pass car id to url to display yhe correct car details
  {path: 'car-detail/:id', component: CarDetailComponent},
  //if bad url is given, redirect to user to main car list page
  {path: '**', component: CarListComponent}




]


@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarListComponent,
      NavBarComponent,
      AddCarComponent,
      CarDetailComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AllCarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
