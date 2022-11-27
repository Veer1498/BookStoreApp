import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { userLogin } from 'src/app/model/book/userLogin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
              private service:UserService) { }

  userLogin:userLogin = new userLogin("","");
  ngOnInit(): void {
  }
  login(){
    this.service.login(this.userLogin).subscribe((data:any)=>{
      console.log(data.object);
      this.service.LoginId(data.object);
      this.router.navigate([""])
    })
  }
}


