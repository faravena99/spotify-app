import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel): void {
    this.multimediaService.trackInfo$.next(track)
  }


}
