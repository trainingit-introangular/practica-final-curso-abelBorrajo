import { Component, ViewChild, OnInit } from '@angular/core';
import { Project } from './models/project.model';
import { MatTable } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  public header = 'Proyectos';
  public description = 'Listado de proyectos';
  public numeroProyectos = 0;
  public counterClass = 'tag secondary';
  displayedColumns: string[] = ['idPro', 'name', 'description', 'action'];

  @ViewChild(MatTable) table: MatTable<any>;

    public project: Project = {
      idPro : 0,
      namePro : '',
      desPro : ''
    };

  public projects: Project[] = [];

  constructor() {
  }

  ngOnInit() {
    this.projects = environment.projects;
  }

  public saveProject() {

    this.project.idPro = this.numeroProyectos + 1;
    this.projects.push({ ...this.project});
    this.numeroProyectos = this.projects.length;
    this.table.renderRows();

    environment.projects = this.projects;
  }

  public deleteProject(project: Project) {
    const index = this.projects.indexOf(project, 0);
    if (index > -1) {
      this.projects.splice(index, 1);
      this.numeroProyectos = this.projects.length;
    }
    this.table.renderRows();

    environment.projects = this.projects;
  }

  public refresh() {
    this.ngOnInit();
  }
}
