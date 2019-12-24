import { Component, OnInit } from '@angular/core';

import { list } from './list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: list[] = [new list('Milma Milk 500li', 'ml0001', 2, 'Packet'),
  new list('Sunflower Oli 1 li', 'sf0001', 1, 'Packet'),
  new list('Matta Rice', 'mt0001', 10, 'Kg')];
  constructor() { }

  ngOnInit() {
  }

  addItem(name: string, qty: number, unit: string){
    this.shoppingList.push(new list(name, '154841', qty, unit));
  }

  deleteItem(index: number){
    this.shoppingList.splice(index, 1);
  }

}
