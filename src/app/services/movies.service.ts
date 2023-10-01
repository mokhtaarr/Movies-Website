import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 movies:any;
 
  constructor(private http:HttpClient){}

   getPopularMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=cbd6740c5d5509528864baba95df9c18'
    )
  }
}