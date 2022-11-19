import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/model/book/book.module';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor() { }
  book:BookModule = new BookModule("","","",0,0);

  ngOnInit(): void {
  }
  button :string= "Add to Cart"
  onAdd(){
      this.button = "ADDED"
  }
  onMouseOver(){
    alert("Hello")
  }
}
