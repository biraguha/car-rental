import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styles: []
})

export class SidebarComponent implements OnInit {

  searchFilter: string = '';;
  @Output() searched: EventEmitter<string> = new EventEmitter<string>();;

  constructor() { }

  ngOnInit(): void { }

  onSearch(value) {
    this.searched.emit(value);
  }

}
