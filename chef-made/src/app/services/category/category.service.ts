import { Injectable } from '@angular/core';
import {Category} from "../../../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getAll():Category[]{
    return [
      {
        id:1,
        name:"Meat",
        imageUrl:"assets/meat.png"
      },
      {
        id:2,
        name:"Seafood",
        imageUrl:"assets/shrimp.png"
      },
      {
        id:3,
        name:"Fruits",
        imageUrl:"assets/fruits.png"
      },
      {
        id:4,
        name:"Vegetables",
        imageUrl:"assets/vegetable.png"
      }
    ]
  }
}
