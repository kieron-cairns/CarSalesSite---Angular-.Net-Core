import { Component, OnInit } from '@angular/core';
import { AllCarsService } from 'src/app/services/all-cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: any;
  constructor(private carService:AllCarsService) { }


//hhtp call to request json data

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(
      data=> {
        this.cars=data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )

  }

}
