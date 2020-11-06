import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AllCarsService {

  constructor(private http:HttpClient) { }

    getAllCars() {
      return this.http.get('data/properties.json')
    }
}
