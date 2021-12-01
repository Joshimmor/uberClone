import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResturantModel } from '../ResturantModel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  FilteredSearchItem: string = "";
  data?: ResturantModel[];
  filterData?: ResturantModel[];
  constructor(public Http: HttpClient) { }

  ngOnInit(): void {
    this.Http.get("../../assets/appData.json").subscribe((n:ResturantModel[])=>{
      this.data = n
      this.filterData = n
    })
  }
  deleteSearch(evt){
    if(evt.keyCode == 8 || evt.keyCode == 46){
      this.filterData = this.data
    }
  }
  search(){
    this.filterData = this.filterData.filter( n => n.resturantName.toUpperCase().match(this.FilteredSearchItem.toUpperCase()) || n.FoodStyle.toUpperCase().match(this.FilteredSearchItem.toUpperCase()))
  }
}
