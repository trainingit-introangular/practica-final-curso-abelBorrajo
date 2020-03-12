import { AfterViewInit, Component, ViewChild, Output, Input, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatTable } from '@angular/material';
import { ProjectlistmaterialDataSource } from './projectlistmaterial-datasource';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projectlistmaterial',
  templateUrl: './projectlistmaterial.component.html',
  styles: [`
    .full-width-table {
      width: 100%;
    }
  `]
})

export class ProjectlistmaterialComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() public dataSource: MatTableDataSource<Project>;

  // @Input() public projectsFiltrado: Project[] = [];
  @Output() public viewProject = new EventEmitter<Project>();
  @Output() public deleteProject = new EventEmitter<Project>();

   /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
   displayedColumns = ['idPro', 'namePro', 'acciones'];

  constructor(private projectService: ProjectService) {
   }

  verProyecto(verProject: Project) {
    this.viewProject.emit(verProject);
  }

  borrarProyecto(verProject: Project) {
    this.deleteProject.emit(verProject);
  }

  ngAfterViewInit() {
    // this.dataSource = new ProjectlistmaterialDataSource(this.paginator, this.sort);
  }

  ngOnInit() {

  }
}
