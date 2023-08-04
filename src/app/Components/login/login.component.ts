import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router){}
   errorMessage:string = "";
   isLoading:boolean=false;

  loginForm:FormGroup = new FormGroup({
    
    'email': new FormControl(null,[Validators.required,Validators.email]),
    'password': new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{3,8}')])
  })

submitForm(){
  this.isLoading=true;
  if(this.loginForm.invalid){return;}
//     this._AuthService.signIn(this.loginForm.value).subscribe({
//       next:(response)=>{
// if(response.message === 'success')
// {
// //navigate to login |Home
this.isLoading=false;
this._Router.navigateByUrl('/home')
// }
// else{
//   //show error
// this.errorMessage = response.message;
// this.isLoading=false;
// }
//       }
      
//     })

}
  ngOnInit(): void {
  }

}