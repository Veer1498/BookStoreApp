import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor() { }

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
