import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cartValue:number =0;
  incresase(){
    this.cartValue= this.cartValue+1;
    this.ngOnInit();
  }
  decrease(){
    if(this.cartValue == 0){
      return;
    }
    this.cartValue= this.cartValue-1;
    this.ngOnInit();
  }

  onCheckout(){
    this.router.navigate(["orders"])
  }
}
