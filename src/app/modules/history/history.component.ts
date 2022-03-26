import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  listResults: Observable<any> = of([]);

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  reciveData(event: string) {
   this.listResults = this.searchService.searchTracks(event);
  
  }

}
