import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterprojectsform',
  templateUrl: './filterprojectsform.component.html',
  styles: []
})
export class FilterprojectsformComponent implements OnInit {

  @Input() public namePro: string;
  @Output() public filterName = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  filtrar() {
    this.filterName.emit(this.namePro);
  }
}
