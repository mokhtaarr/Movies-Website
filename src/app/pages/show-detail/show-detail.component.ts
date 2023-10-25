import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/types/movie';
import { Video } from 'src/app/types/video';
import { Image } from 'src/app/types/image';
import { Actor } from 'src/app/types/credits';


@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  showId = '';
  show$ : Observable<Movie> | null = null;
  showVideos$: Observable<Video[]> | null = null;
  showImages$: Observable<Image[]> | null = null;
  showCast$ : Observable<Actor[]> | null = null;


  imagesSizes = IMAGES_SIZES;
  constructor(private  router:ActivatedRoute , private moviesService:MoviesService){}
  ngOnInit(){
   
    this.showId = this.router.snapshot.params['id'];
    this.show$ = this.moviesService.getMovieById(this.showId);
    this.showVideos$ = this.moviesService.getMovieVideos(this.showId);
    this.showImages$ = this.moviesService.getMovieImages(this.showId);
    this.showCast$ = this.moviesService.getMovieCast(this.showId);



  }
}
