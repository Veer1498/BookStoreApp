import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router :Router,
    private service : UserService) { }

  ngOnInit(): void {
    console.log(this.service.userId)
    if(this.service.userId != 0){
      this.loginDetails ="Log Out";
    }
    else if (this.service.userId == 0){
      this.loginDetails = "Log In";
    }
    }

  goHome(){
    this.router.navigate([""]);
  }
  goCart(){
    this.router.navigate(["cart"]);
  }

  loginDetails:string=""
  onLog(){
    if(this.service.userId > 0){
      this.service.LoginId(0)
    }
    else{
      this.router.navigate(["/login"])
    }
  }

}
