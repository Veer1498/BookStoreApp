import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) {
    
   }

  getList(){
    return this.http.get("http://localhost:8084/book/findAll")
  }
}
