import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/model/book/book.module';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private service:BooksService) { }
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
  button :string= "Add to Cart"
  onAdd(){
      this.button = "ADDED"
  }
  onMouseOver(){
    alert("Hello")
  }
}
