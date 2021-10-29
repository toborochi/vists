import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-contribute',
  templateUrl: './page-contribute.component.html',
  styleUrls: ['./page-contribute.component.css']
})
export class PageContributeComponent implements OnInit {


  items = [
    'Individuo','Organizacion',
  ];
  testValue = new FormControl(this.items[0]);

  constructor() { }

  ngOnInit() {
  }

}
