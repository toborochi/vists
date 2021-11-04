import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-latest-card',
  templateUrl: './latest-card.component.html',
  styleUrls: ['./latest-card.component.css']
})
export class LatestCardComponent implements OnInit {

  @Input()
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
