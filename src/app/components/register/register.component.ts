import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userReg } from 'src/app/model/book/userReg';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service:UserService,
              private router:Router) {

   }

  userReg:userReg= new userReg("","","",new Date,"")
  ngOnInit(): void {
  }
  createAcc(){
    this.service.register(this.userReg).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(["login"])
    })
  }

}
