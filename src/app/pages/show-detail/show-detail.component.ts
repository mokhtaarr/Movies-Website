import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  showId = '';
  show$ : Observable<Movie> | null = null;
  imagesSizes = IMAGES_SIZES;
  constructor(private  router:ActivatedRoute , private moviesService:MoviesService){}
  ngOnInit(){
    // this.router.params.subscribe(params =>{
    //   this.showId = params['id']
    // })

    this.showId = this.router.snapshot.params['id'];
    this.show$ = this.moviesService.getMovieById(this.showId);
  }
}
