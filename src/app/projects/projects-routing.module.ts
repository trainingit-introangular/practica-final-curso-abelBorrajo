import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { NewprojectformComponent } from './projects/dashboard/newprojectform/newprojectform.component';
import { ViewerprojectformComponent } from './projects/dashboard/viewerprojectform/viewerprojectform.component';

const routes: Routes = [
{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'projects',
      component: ProjectsComponent
    },
    {
        path: 'viewerproject',
        component: ViewerprojectformComponent
    }    ,
    {
      path: 'new',
      component: NewProjectComponent
    }
  ]
},
  {
    path: 'ver/:id',
    component: ViewerProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
