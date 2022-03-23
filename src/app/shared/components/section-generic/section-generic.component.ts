import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';


@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.scss']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []

  constructor() { }

  ngOnInit(): void {
  }

}
