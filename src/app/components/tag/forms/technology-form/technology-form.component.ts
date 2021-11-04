import { GraphContributionService } from './../../../../services/graph-contribution.service';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html',
  styleUrls: ['./technology-form.component.css'],
})
export class TechnologyFormComponent implements OnInit {
  rol = ['Abierta', 'No Abierta'];

  testValue = new FormControl(this.rol[0]);

  constructor(private graphService: GraphContributionService) {}

  ngOnInit() {}

  guardar() {
    this.graphService.data = {
      labels: ['Tecnologia'],
      properties: {
        role: this.testValue.value,
      },
    };
  }
}
