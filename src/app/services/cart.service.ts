import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { 

  }

  addCart(Uid:Number,cartDetails:any){
    return this.http.post("http://localhost:8084/cart/addToCart/"+Uid,cartDetails)
  }

  getCartList(id:number){
    return this.http.get("http://localhost:8084/cart/UserCart/"+id)
  }

}
