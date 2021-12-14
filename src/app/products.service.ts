import { Injectable } from '@angular/core';
import { Product } from './components/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : Product[]{
    return [
      new Product(1,"Fried Chicken",100,20,"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
      new Product(2,"Nugged",100,20,"https://images.pexels.com/photos/6941033/pexels-photo-6941033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
      new Product(3,"Mashed Potato",100,20,"https://images.pexels.com/photos/10289298/pexels-photo-10289298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
      new Product(4,"Egg Tart",100,0,"https://images.pexels.com/photos/5677314/pexels-photo-5677314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
      new Product(5,"Chicken Burger",100,20,"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
    ];
  }
}
