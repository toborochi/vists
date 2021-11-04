import {Component, Input, OnInit} from '@angular/core';
import {faDatabase, faHeart} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
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


  @Input()
  routeUrl: string;



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRoute() : void{
    this.router
          .navigateByUrl(this.routeUrl)
          .then((r) => {});
  }

}
