import { Component, OnInit } from '@angular/core';
import { faDatabase,faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lab-about',
  templateUrl: './lab-about.component.html',
  styleUrls: ['./lab-about.component.css']
})
export class LabAboutComponent implements OnInit {

  faCoffee = faDatabase;
  faHeart1 = faHeart;

  constructor() {
  }

  ngOnInit(): void {
  }
}
