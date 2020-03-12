import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { FilterprojectsformComponent } from './projects/dashboard/filterprojectsform/filterprojectsform.component';
import { ProjectslistComponent } from './projects/dashboard/projectslist/projectslist.component';
import { ViewerprojectformComponent } from './projects/dashboard/viewerprojectform/viewerprojectform.component';
import { NewprojectformComponent } from './projects/dashboard/newprojectform/newprojectform.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectlistmaterialComponent } from './projects/dashboard/projectlistmaterial/projectlistmaterial.component';

@NgModule({
  declarations: [ProjectsComponent, NewProjectComponent, ViewerProjectComponent,
     DashboardComponent, FilterprojectsformComponent, ProjectslistComponent,
     ViewerprojectformComponent, NewprojectformComponent, ProjectlistmaterialComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ProjectsModule { }
