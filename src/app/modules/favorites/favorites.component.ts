import { Component, OnInit } from '@angular/core';
import { TrackService } from '../tracks/services/track.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  listTracks: any = [];
  constructor(private http: TrackService) { }

  ngOnInit(): void {

    this.http.getAllTracks$().subscribe((res=> {
     this.listTracks = res;
     
    }))

  }



}
