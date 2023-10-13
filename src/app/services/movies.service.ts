import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
 private apiUrl = "https://api.themoviedb.org/3";
 private apiKey = "cbd6740c5d5509528864baba95df9c18";

  constructor(private http:HttpClient){}

   getPopularMovies(){
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`)
  }

   getUpComingMovies(){
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`)
  }
}
