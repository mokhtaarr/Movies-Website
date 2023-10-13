import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  upComingMovies$ = this.moviesService.getUpComingMovies();
  
  constructor(private moviesService:MoviesService){

  }
}
