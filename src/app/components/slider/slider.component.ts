import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { animate,state,style,transition,trigger} from '@angular/animations';
import { imagesBaseUrl } from 'src/app/constants/images-sizes';
import { Movie } from 'src/app/types/movie';


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
  // slideIndex!: number;

  @Input() slides: Movie[] = [];
  @Input() isHeader = false;

  constructor(public moviesService : MoviesService){}

  movies$ = this.moviesService.getMoviesByType('popular');
 
  imagesBaseUrl = imagesBaseUrl;
    slideIndex = 0 ;

   ngOnInit(): void {
    if(!this.isHeader){
       this.changeSlide()
    }
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
