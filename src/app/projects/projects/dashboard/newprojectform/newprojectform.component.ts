import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-newprojectform',
  templateUrl: './newprojectform.component.html',
  styles: []
})
export class NewprojectformComponent implements OnInit {

  public project: Project = {
    idPro : 0,
    namePro : '',
    desPro : ''
  };

  @Output() public newProject = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }

  nuevo() {
    this.newProject.emit(this.project);
  }

}
