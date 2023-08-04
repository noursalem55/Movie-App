import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  movieDetails:any;
// movieId:number=0;
movieId:string="";
mediaType:string='';
// imgBaseUrl:string = this._MoviesService.imgBaseUrl;
imgPath:string=''
imgPrefix:string="https://image.tmdb.org/t/p/original";

// imgBaseUrl:string = this._MoviesService.imgBaseUrl;
  constructor(private _ActivateRoute:ActivatedRoute, private _MoviesService:MoviesService) { 
    this.movieId = this._ActivateRoute.snapshot.params['id'];
    // this.mediaType = this._ActivateRoute.snapshot.params['mediaType']; }
// getMovieDetails(){
  this._MoviesService.getMovieDetails(this.movieId).subscribe({
    next:(response) =>this.movieDetails =response 
  })
}
  ngOnInit(): void {
 
    // this.movieId= this._ActivateRoute.snapshot.params["id"];
    // this._MoviesService.getMovieDetails(this.movieId).subscribe({
    //   next:(response) =>this.movieDetails =response 
    // })
    // this.getMovieDetails();
  }

}
