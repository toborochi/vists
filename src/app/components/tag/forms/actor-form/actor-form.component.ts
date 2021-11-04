import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GraphContributionService } from 'src/app/services/graph-contribution.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css'],
})
export class ActorFormComponent implements OnInit {
  constructor(private graphService: GraphContributionService) {}

  items = ['Individuo', 'Organización'];
  sector = [
    'Sociedad Civil',
    'Gobierno',
    'Empresa',
    'Academia',
    'Medio de Comunicación',
  ];
  grupo = [
    'Periodistas',
    'Activistas',
    'Cientista de Datos',
    'Desarrolladores',
    'Investigadores',
  ];
  rol = ['Productores', 'Intermediarios'];

  testValue = new FormControl(this.items[0]);
  testValue2 = new FormControl(this.sector[0]);
  testValue3 = new FormControl(this.grupo[0]);
  testValue4 = new FormControl(this.rol[0]);

  ngOnInit() {}

  guardar() {
    this.graphService.data = {
      labels: ['Actor'],
      properties: {
        type: this.testValue.value,
        sector: this.testValue2.value,
        group: this.testValue3.value,
        role: this.testValue4.value,
      },
    };
  }
}
