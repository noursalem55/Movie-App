import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
// import {LoginRequest} from './login-request';
// import {RegisterRequest} from './register-request';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData= new BehaviorSubject(null);
  saveUserData(){
    let encodedData=JSON.stringify( localStorage.getItem('userToken'));
    let decodeToken:any=jwtDecode(encodedData);
    this.userData.next(decodeToken);
  }
  constructor(private _HTTPClient:HttpClient, private _router:Router) {
    if(localStorage.getItem('userToken') != null){
      this.saveUserData();
    }
  }

  signUp(formData:object):Observable<any>
  {
     return this._HTTPClient.post('https://routeegypt.herokuapp.com/signup', formData)

  }
  signIn(formData:object):Observable<any>
  {
     return this._HTTPClient.post('https://routeegypt.herokuapp.com/signin', formData)

  }
  
  logOut()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    // this._Router.navigate(['/login'])
    this._router.navigateByUrl('/home')

  }

}


