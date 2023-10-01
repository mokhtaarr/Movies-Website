import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  movies:any;
  constructor(private http:HttpClient){}
 
  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(){
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=cbd6740c5d5509528864baba95df9c18'
    ).subscribe(data=>{
      this.movies = data
    }
    )
  }

}
