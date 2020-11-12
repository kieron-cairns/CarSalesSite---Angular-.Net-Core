import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  //Use activated route so information can be accessed information related to an active route.
  //injected into constructor below

  public carId: number;

  constructor(private route: ActivatedRoute, private router: Router)  { }


  ngOnInit() {

    this.carId = Number(this.route.snapshot.params['id']);

    //routerLink does not instanciate the  component 
    //if on same route due to performance. Below code rectifies this. 

    this.route.params.subscribe(
      (params) => {
        this.carId = +params['id'];
      }
    )
  }

  onSelectNext() {
    this.carId += 1;
    //absolute path
    // this.router.navigate(['car-detail/', this.carId], {relativeTo: this.route});

    this.router.navigate(['car-detail/', this.carId]);

  
  }

}
