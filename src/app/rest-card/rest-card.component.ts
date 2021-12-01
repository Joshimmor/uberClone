import { Component, Input, OnInit } from '@angular/core';
import { ResturantModel } from '../ResturantModel';

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.css']
})
export class RestCardComponent implements OnInit {
  @Input() ResturantDetails!: ResturantModel;
  link: string = "resturant/"
  constructor() { }

  ngOnInit(): void {
    this.link += this.ResturantDetails.id
  }
  ButtonClick(){
    window.location.href = this.link
  }
}
