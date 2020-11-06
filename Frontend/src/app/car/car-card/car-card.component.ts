import { Component, Input } from '@angular/core';

@Component ({

  selector: 'app-car-card',
  //template: '<h1>I am a card</h1>',
  //use property-card.component.html
  templateUrl: 'car-card.component.html',
  //styles: ['h1 {font-weight: normal;}']
    //use property-card.component.css
  styleUrls: ['car-card.component.css']

})

export class CarCardComponent
{
  //Static data for now for testing purposes. Data will later be called from DB

  @Input() car : any


}
