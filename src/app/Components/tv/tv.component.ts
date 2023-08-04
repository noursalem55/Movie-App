import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  trendingTv:any[]=[];
  imgBaseUrl:string = this._MoviesService.imgBaseUrl;
  term:string='';
  pages:number=1;
  constructor(private _MoviesService:MoviesService) { }

  getTvShows(pageNum:number){
    this.pages=pageNum;
    this._MoviesService.getPaginatedMoviesTvshows('tv',pageNum).subscribe ({
      next: (response)=>this.trendingTv= response.results
    })
    
    
      }
      next()
      {
        if(this.pages==5)
        {
          this.pages=1;
          this.getTvShows(this.pages);
        }
        else
        {
          this.pages++;
          this.getTvShows(this.pages);
        }
      }
      prev()
      {
        if(this.pages==1)
        {
          this.pages=5;
          this.getTvShows(this.pages);
        }
        else
        {
          this.pages--;
          this.getTvShows(this.pages);
        }
      }


  ngOnInit(): void {
    this._MoviesService.getTreanding('tv').subscribe({
      next:(response)=> this.trendingTv =response.results
    })
  }

}
