import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  trendingMovies:any[]=[];
  imgBaseUrl:string='https://image.tmdb.org/t/p/original'
  term:string="";
  pages:number=1;
  getpaginatedMovies(pageNum:number){
this.pages=pageNum;
this._MoviesService.getTrendingPaginatedItems(pageNum).subscribe ({
  next: (response)=>this.trendingMovies= response.results
})


  }
  next()
  {
    if(this.pages==5)
    {
      this.pages=1;
      this.getpaginatedMovies(this.pages);
    }
    else
    {
      this.pages++;
      this.getpaginatedMovies(this.pages);
    }
  }
  prev()
  {
    if(this.pages==1)
    {
      this.pages=5;
      this.getpaginatedMovies(this.pages);
    }
    else
    {
      this.pages--;
      this.getpaginatedMovies(this.pages);
    }
  }
  constructor(private _MoviesService:MoviesService) { }
 

 

// prev(){
//   if(this.pageNum>1){
//   this.pageNum--;
//   this.getPaginatedData(this.pageNum)
//   }
// }
// next(){
//   if(this.pageNum<5){
//     this.pageNum++;
//     this.getPaginatedTrendingData(this.pageNum)
//     }
//   }
  ngOnInit(): void {
    this._MoviesService.searchFilter.subscribe(
      {
        next:(value) =>
        {this.term=value;}
      });
    this.getpaginatedMovies(this.pages);
  }
  }


