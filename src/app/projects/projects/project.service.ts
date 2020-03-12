import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private urlapi = 'https://api-base.herokuapp.com/api/pub/projects';
  private dataHttp$ = new BehaviorSubject<any[]>([]);
  public items: any[];
  public item: any;

  constructor(private httpClient: HttpClient) { }

  public initializeArray(): Project[] {
    // recorremos enviroment y lo metemos en el servidor
    this.httpClient.delete(this.urlapi).subscribe();
    environment.projects.forEach(project =>
      this.httpClient.post<Project>(this.urlapi, project).subscribe()
    );

    // el array de elementos lo devolvemos también inicializado
    this.items = environment.projects;
    return environment.projects;
  }

  public select$ = () => this.dataHttp$.asObservable();

  public dispatchProjectHttp(project) {
    this.httpClient.post<Project>(this.urlapi, project).subscribe();
    this.dataHttp$.next([...this.items]);
  }

  public deleteProjectHttp(project) {
    this.httpClient.post<Project>(this.urlapi, project).subscribe();
    this.dataHttp$.next([...this.items]);
  }

  public saveItem(array: any[], itemGuardar: any) {
    this.items = array;
    this.items.push({ ...itemGuardar});
    // y guardamos mediante el dispatch
    this.dispatchProjectHttp(itemGuardar);
    return this.items;
  }

  public delteItem(array: any[],  itemBorrar: any) {
    this.items = array;
    const index = this.items.indexOf(itemBorrar, 0);

    if ( index > -1 ) {
      this.items.splice(index, 1);
    }
    // eliminamos del remoto también
    this.deleteProjectHttp(itemBorrar);

    return this.items;
  }
}
