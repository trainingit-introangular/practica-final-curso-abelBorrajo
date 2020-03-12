import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-viewerprojectform',
  templateUrl: './viewerprojectform.component.html',
  styles: []
})
export class ViewerprojectformComponent implements OnInit {
  @Input() projectSel: Project;

  constructor() { }

  ngOnInit() {
  }

}
