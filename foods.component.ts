import { Component, OnInit } from '@angular/core';
import { FoodsService } from './foods.service';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent  implements OnInit {
  dataFoods : any 
  constructor(
    private foodService : FoodsService
  ){}

  ngOnInit(): void { 
    this.getDataFoods()

  }
  getDataFoods(){
    this.foodService.getDataFoods().subscribe(res => {
      this.dataFoods = res 
      console.log(res)

    })
  }

}
