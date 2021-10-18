import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-footer',
  templateUrl: './lab-footer.component.html',
  styleUrls: ['./lab-footer.component.css']
})
export class LabFooterComponent implements OnInit {

  date: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
