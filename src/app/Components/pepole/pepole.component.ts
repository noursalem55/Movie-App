import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-pepole',
  templateUrl: './pepole.component.html',
  styleUrls: ['./pepole.component.css']
})
export class PepoleComponent implements OnInit {
  trendingPepole:any[]=[];
  imgBaseurl:string="https://image.tmdb.org/t/p/original";

  constructor(private _MoviesService:MoviesService) {

    this._MoviesService.getTreanding('person').subscribe({
      next:(response) =>this.trendingPepole =response.result 
    })
   }
  
 

  ngOnInit(): void {
    // this._MoviesService.searchFilter.subscribe((value)=>{
    //   this.term=value;
    // })
  }
}
