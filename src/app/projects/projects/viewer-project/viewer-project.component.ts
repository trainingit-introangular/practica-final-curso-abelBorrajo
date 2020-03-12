import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styles: []
})
export class ViewerProjectComponent implements OnInit {
  public project: Project = {
    idPro : 0,
    namePro : '',
    desPro : ''
  };
  public IdParam = 0;

  constructor(activatedRoute: ActivatedRoute) {
    this.IdParam = parseFloat(activatedRoute.snapshot.params.id);
    this.project = environment.projects.filter(p => p.idPro === this.IdParam)[0];
  }

  ngOnInit() {
  }
}
