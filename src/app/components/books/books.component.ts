import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/model/book/book.module';
import { CartModule } from 'src/app/model/cart/cart.module';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private userSer:UserService,
              private service:BooksService,
              private cartServ:CartService) { }
  book:BookModule = new BookModule("","","",0,0);
  
  list:any;
  length:Number = 0;
  ngOnInit(): void {
    this.service.getList().subscribe((data:any)=>{
      this.list = data.object;
      this.length = this.list.length
      console.log(data);
    })
  }

  cart:CartModule= new CartModule(0,0)

  button :string= "Add to Cart"
  onAdd(bookId:Number){
    this.cart.bookId = bookId;
    this.cart.quantity = 1;
    this.cartServ.addCart(this.userSer.userId,this.cart).subscribe((data:any) =>{
      console.log(data);
    })
    this.button = "ADDED"
  }
  
}
