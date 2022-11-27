import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CartModule {
  public bookId:Number=0;
  public quantity:Number=0;
  


  constructor(bookId:Number,quantity:Number){
    this.bookId = bookId;
    this.quantity = quantity;
  }
 }
