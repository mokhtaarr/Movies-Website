import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  slideIndex!: number;

  constructor(public moviesService : MoviesService){}

  movies$ = this.moviesService.getPopularMovies();
 
    imagesBaseUrl = 'https://image.tmdb.org/t/p/';

  ngOnInit(): void {
    this.changeSlide()
  }


 
  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 10) {
        this.slideIndex = 0;
      }
    }, 5000);
  }
}
