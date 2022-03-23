import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackService } from './services/track.service';
import * as dataRaw from '../../shared/data/tracks.json'
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  mokTrackList:Array<TrackModel> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()

  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      })
  }
}
