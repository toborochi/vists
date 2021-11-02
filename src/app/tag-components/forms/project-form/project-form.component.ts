import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GraphContributionService } from 'src/app/services/graph-contribution.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  tipo = ['Repositorio', 'Visualizacion', 'Analisis'];

  testValue = new FormControl(this.tipo[0]);

  constructor(private graphService: GraphContributionService) {}

  ngOnInit() {}

  guardar() {
    this.graphService.data = {
      labels: ['Proyecto'],
      properties: {
        type: this.testValue.value,
      },
    };
  }
}
