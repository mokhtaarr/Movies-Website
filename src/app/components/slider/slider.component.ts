import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  constructor(public moviesService : MoviesService){}

  movies$ = this.moviesService.getPopularMovies();
 
  // ngOnInit(): void {
  //   this.getPopularMovies();
  // }

  // getPopularMovies(){
  //   this.moviesService.getPopularMovies().subscribe(data=>this.movies = data);
  // }
 

}
