import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResturantModel, FoodItem } from '../ResturantModel';
import { Router } from '@angular/router';
import { of,  Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  data?: ResturantModel;
  dataId?: string;
  showFiller = false;
  cart: FoodItem[] = []
  total: number = 0
  constructor(private readonly router: Router, public Http: HttpClient) { }

  ngOnInit(): void {
    let mySubscription = {
    next:(x:string)=> {this.dataId = x },
    error:(Err:Error)=>{console.error(Err)},
    complete:()=>{
      this.Http.get("../../assets/appData.json").subscribe((n:ResturantModel[])=>{
        this.data = n.filter(n => n.id == parseInt(this.dataId))[0]
          })
      }
    }
    const observable = of(this.router.url.split('/')[2])
    observable.subscribe(mySubscription) 
     
    }
    addItem(item: FoodItem){
      this.cart.push(item)
      this.total += item.Price
    }
    home(){
      window.location.href = ""
    }

}
