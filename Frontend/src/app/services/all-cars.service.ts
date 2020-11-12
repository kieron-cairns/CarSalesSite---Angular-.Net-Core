// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })

// export class AllCarsService {

//   constructor(private http:HttpClient) { }

//     getAllCars() {
//       return this.http.get('data/properties.json')
//     }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ICar } from 'src/app/car/ICar.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AllCarsService {

  constructor(private http:HttpClient) { }

    getAllCars(SellRent: number): Observable<ICar[]> {
      return this.http.get('data/cars.json').pipe(
        map(data => {
          const carsArray: Array<ICar> = [];

          for(const id in data) {
            if(data.hasOwnProperty(id) && data[id].SellRent === SellRent)
            {
              carsArray.push(data[id]);
            }
          }
          return carsArray;
        })
      )
    }
}
