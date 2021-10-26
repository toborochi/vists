import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http:HttpClient) { }

  getGraph(): Observable<any>{
    return this.http.get(`https://eco-datos.herokuapp.com/v1/graph`);
  }

}