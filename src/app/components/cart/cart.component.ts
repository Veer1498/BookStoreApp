import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartModule } from 'src/app/model/cart/cart.module';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router:Router,
    private service:CartService,
    private userServ:UserService) { 

    }
    userId:any;
    cartList:any;
  ngOnInit(): void {
    this.userId=localStorage.getItem("userId");
    this.userId = Number(this.userId)
    console.log(typeof this.userId)
    this.service.getCartList(this.userId).subscribe((data:any)=>{
      this.cartList = data
      console.log(this.cartList)
    })
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
