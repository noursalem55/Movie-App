import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
      constructor(private _AuthService:AuthService, private _Router:Router){}
   errorMessage:string = "";
   isLoading:boolean=false;

  registerForm:FormGroup = new FormGroup({
    'first_name': new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'last_name': new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'age': new FormControl(null,[Validators.required,Validators.min(10),Validators.max(50)]),
    'email': new FormControl(null,[Validators.required,Validators.email]),
    'password': new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{3,8}')])
  })

submitRegisterForm(){
  // this.isLoading=true;
  if(this.registerForm.invalid){
    return;}
//     this._AuthService.signUp(this.registerForm.value).subscribe({
//       next:(response)=>{
// if(response.message === 'success')
// {

// this.isLoading=false;
// this._Router.navigateByUrl('/login')
// }
// else{

// this.errorMessage = response.message;
// this.isLoading=false;
// }
//       }
      
//     })
  }


  

  ngOnInit(): void {
  }

}