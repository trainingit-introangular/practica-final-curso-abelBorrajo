import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsModule } from '../../projects.module';
import { environment } from 'src/environments/environment';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  public project: Project;
  public projectsFiltrado: Project[] =  this.projectService.initializeArray();
  public numProjects: number;
  public projectSel: Project;
  public projectsFiltradoHttp$: Observable<any[]>;
  public dataSource: MatTableDataSource<Project>;

  constructor(private projectService: ProjectService) {

   }

  public onFilterName(name: string) {
    this.projectsFiltrado = [];
    let j = 0;
    if (name === '') {
      this.projectsFiltrado = environment.projects;
      this.dataSource = new MatTableDataSource(this.projectsFiltrado);
    }

    for (const item of environment.projects) {
      if (item.namePro.toUpperCase().indexOf(name.toUpperCase()) > -1) {
        this.projectsFiltrado[j] = item;
        j++;
      }
    }
    this.dataSource.data = this.projectsFiltrado;
  }

  public onNewProject(nuevoProject: Project) {
    this.onFilterName('');
    nuevoProject.idPro = this.projectsFiltrado.length + 1;
    this.project = nuevoProject;
    this.saveProject();
  }

  public onViewProject(viewProject: Project) {
    this.projectSel = viewProject;
  }

  public onDeleteProject(delProject: Project) {
    this.deleteProject(delProject);
  }


  public saveProject() {
    this.projectsFiltrado = this.projectService.saveItem(this.projectsFiltrado, this.project);
    this.numProjects = this.projectsFiltrado.length;
    this.dataSource.data = this.projectsFiltrado;
  }

  public deleteProject( projectDel: Project ) {
    this.projectsFiltrado = this.projectService.delteItem(this.projectsFiltrado, projectDel);
    this.numProjects = this.projectsFiltrado.length;
    this.dataSource.data = this.projectsFiltrado;
  }

  ngOnInit() {
    this.projectsFiltradoHttp$ = this.projectService.select$();
    this.numProjects = this.projectsFiltrado.length;
    this.dataSource = new MatTableDataSource(this.projectsFiltrado);
  }
}
