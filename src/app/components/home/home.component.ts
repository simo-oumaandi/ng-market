import { Component, OnInit } from '@angular/core';
import { Good } from '../../../interfaces/goods.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Good[] = [
    { name: 'Apple', price: 5, photoUrl: 'assets/apple.jpg' },
    { name: 'Banana', price: 6, photoUrl: 'assets/banana.jpg' },
    { name: 'Mango', price: 13, photoUrl: 'assets/mango.jpg' },
    { name: 'Strawberry', price: 11, photoUrl: 'assets/strawberry.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(index: number) {
    console.log('Added', this.goods[index])
  }

}
