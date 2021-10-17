import {Component, Input, OnInit} from '@angular/core';
import {faDatabase, faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  content: string;

  @Input()
  icon: string;




  constructor() { }

  ngOnInit(): void {
  }

}
