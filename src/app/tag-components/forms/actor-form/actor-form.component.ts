import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css'],
})
export class ActorFormComponent implements OnInit {
  constructor() {}

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
    'Investigadores'
  ]
  rol = [
    'Productores',
    'Intermediarios'
  ]

  testValue = new FormControl(this.items[0]);
  testValue2 = new FormControl(this.sector[0]);
  testValue3 = new FormControl(this.grupo[0]);
  testValue4 = new FormControl(this.rol[0]);

  ngOnInit() {}
}
