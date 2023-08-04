import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable, BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  imgBaseUrl:string='https://image.tmdb.org/t/p/original'

  constructor(private _HTTPClient:HttpClient) { }
  searchFilter = new BehaviorSubject<string>('');
  emitSearchFilter(value:string)
  {
    this.searchFilter.next(value)
  }


  getTreanding(mediaType:string):Observable<any>
  {
return this._HTTPClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=d8dac89544a71e030e35efaf712d274f`)
  }
  // getPaginatedMoviesTvshows(mediaType:any,pageNumber:number):Observable<any>
  // {
  //   return this._HTTPClient.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=d8dac89544a71e030e35efaf712d274f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  // }
  
  getPaginatedMoviesTvshows(mediaType:any,pageNumber:number):Observable<any>
  {
    return this._HTTPClient.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=d8dac89544a71e030e35efaf712d274f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }

  
  getTrendingPaginatedItems(pageNumber:number):Observable<any>
  {
  return this._HTTPClient.get(`https://api.themoviedb.org/3/discover/movie/?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }

  // getMovieDetails(id:string):Observable<any>{
  //   return this._HTTPClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d8dac89544a71e030e35efaf712d274f&language=en-US`);
  // }
  getMovieDetails(id:string):Observable<any>
  {
    return this._HTTPClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d8dac89544a71e030e35efaf712d274f&language=en-US`)
  }
  
}
