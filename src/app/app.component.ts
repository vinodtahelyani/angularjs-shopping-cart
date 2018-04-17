import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = [{
    id:1,
    name:'apple apple',
    price: 20
  },{
    id:2,
    name:'mango',
    price: 20
  },{
    id:3,
    name:'banana',
    price: 20
  },{
    id:4,
    name:'guava',
    price: 20
  },{
    id:5,
    name:'big apple',
    price: 20
  },{
    id:6,
    name:'small apple',
    price: 20
  }];

  shoppingCart=[{
    id:1,
    name:'apple',
    price: 20,
    qty: 1
  }];
  @ViewChild('qty') qty: ElementRef;


  addItem(i: number, qty){
    var item = this.items[i];
    item.qty = qty.value;
    this.shoppingCart.push(item);
  }

  removeItem(i: number){
    this.shoppingCart.splice(i,1);
  }
}
