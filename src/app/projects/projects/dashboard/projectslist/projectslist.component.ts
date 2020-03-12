import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projectslist',
  templateUrl: './projectslist.component.html',
  styles: []
})
export class ProjectslistComponent implements OnInit {

  @Input() public projectsFiltrado: Project[] = [];
  @Output() public viewProject = new EventEmitter<Project>();
  @Output() public deleteProject = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }

  verProyecto(verProject: Project) {
    this.viewProject.emit(verProject);
  }

  borrarProyecto(verProject: Project) {
    this.deleteProject.emit(verProject);
  }

}
