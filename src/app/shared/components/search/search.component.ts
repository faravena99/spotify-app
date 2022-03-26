import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  src: string = ''
  @Output() callbackData: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term: string) {
    if (term.length >= 3) {
      this.callbackData.emit(term)
    }
  }
}
