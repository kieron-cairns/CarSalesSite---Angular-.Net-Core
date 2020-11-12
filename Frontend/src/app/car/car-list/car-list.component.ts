// import { Component, OnInit } from '@angular/core';
// import { AllCarsService } from 'src/app/services/all-cars.service';

// @Component({
//   selector: 'app-car-list',
//   templateUrl: './car-list.component.html',
//   styleUrls: ['./car-list.component.css']
// })
// export class CarListComponent implements OnInit {

//   cars: any;
//   constructor(private carService:AllCarsService) { }


// //hhtp call to request json data

//   ngOnInit(): void {
//     this.carService.getAllCars().subscribe(
//       data=> {
//         this.cars=data;
//         console.log(data);
//       }, error => {
//         console.log(error);
//       }
//     )

//   }

// }

import { Component, OnInit } from '@angular/core';
import { AllCarsService } from 'src/app/services/all-cars.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ICar } from 'src/app/car/ICar.interface';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  SellRent = 1;
  cars: ICar[];
  constructor(private route: ActivatedRoute, private carService:AllCarsService) { }


//hhtp call to request json data

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()) {
        this.SellRent = 2; // if 2, then user is on rent-car URL, else it is base URL which is buy-car
    }

    this.carService.getAllCars(this.SellRent).subscribe(
      data=> {
        this.cars=data;
        console.log(data);
      }, error => {
        console.log('httperror');
        console.log(error);
      }
    )

  }

}
