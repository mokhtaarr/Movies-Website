import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
upComingMovies$ = this.moviesService.getUpComingMovies();
topRatedMovies$ = this.moviesService.getTopRatedMovies();
  
  constructor(private moviesService:MoviesService){

  }
}
