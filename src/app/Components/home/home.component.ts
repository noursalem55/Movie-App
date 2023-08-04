import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   autoplay: true,
  //   margin: 15,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }

  constructor(private _MoviesService:MoviesService) { }
trendingMovies:any[]=[];
trendingTv:any[]=[];
trendingPepole:any[]=[];
imgBaseurl:string="https://image.tmdb.org/t/p/original";
term:string='';

seemore(movie:any)
{
  movie.isExpanded=true;
}
seeless(movie:any)
{
  movie.isExpanded=false;
}
  ngOnInit(): void {

    this._MoviesService.getTreanding('movie').subscribe({
      next:(response)=> this.trendingMovies =response.results.slice(0,10)
    })
    this._MoviesService.getTreanding('tv').subscribe({
      next:(response)=> this.trendingTv =response.results
    })
    this._MoviesService.getTreanding('pepole').subscribe({
      next:(response)=> this.trendingPepole =response.results
    })
    this._MoviesService.searchFilter.subscribe(
      {
        next: (value)=>
        {this.term=value;}
      });

  }


}
