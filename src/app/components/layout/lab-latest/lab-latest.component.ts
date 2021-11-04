import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-lab-latest',
  templateUrl: './lab-latest.component.html',
  styleUrls: ['./lab-latest.component.css'],
})
export class LabLatestComponent implements OnInit {
  readonly latest$ = new Observable<any[]>();
  constructor(private graphService: GraphService) {
    this.latest$ = this.graphService.getLatest();
  }

  ngOnInit(): void {}
}
