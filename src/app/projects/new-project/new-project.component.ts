import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { Project } from '../projects/models/project.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styles: []
})
export class NewProjectComponent implements OnInit {

  public project: Project = {
    idPro : 0,
    namePro : '',
    desPro : ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  public saveProject() {

    this.project.idPro = environment.projects.length + 1;
    environment.projects.push({ ...this.project});
  }

}
