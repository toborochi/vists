import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-contribute',
  templateUrl: './page-contribute.component.html',
  styleUrls: ['./page-contribute.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContributeComponent implements OnInit {
  readonly items = [
    { name: 'John', surname: 'Cleese' },
    { name: 'Eric', surname: 'Idle' },
    { name: 'Graham', surname: 'Chapman' },
    { name: 'Michael', surname: 'Palin' },
    { name: 'Terry', surname: 'Gilliam' },
    { name: 'Terry', surname: 'Jones' },
  ];

  readonly stringify = (item: { name: string; surname: string }) =>
    `${item.name} ${item.surname}`;

  value = null;

  testValue = new FormControl(this.items[0]);

  constructor() {}

  ngOnInit() {}
}
