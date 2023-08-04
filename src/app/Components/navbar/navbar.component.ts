import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _MoviesService:MoviesService) { }

  isLogin:boolean=false;
  term:string='';

  sendTerm()
  {
    this._MoviesService.emitSearchFilter(this.term);
  }

  logOut(){
    this._AuthService.logOut();
  }

 
  ngOnInit(): void {
    this.isLogin=true;
    // this._AuthService.userData.subscribe({
    //   next:()=>{
    //     if (this._AuthService.userData.getValue() != null) {
    //     }
    //     else
    //     {
    //       this.isLogin=false;
    //     }
    //   }
    // })
  }

}
