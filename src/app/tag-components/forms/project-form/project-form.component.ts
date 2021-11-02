import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  

  tipo = [
    'Repositorio',
    'Visualizacion',
    'Analisis'
  ]

  testValue = new FormControl(this.tipo[0]);

  constructor() { }

  ngOnInit() {
  }

}
