import {ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';
import {VisNetworkService} from 'ngx-vis';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-lab-header',
  templateUrl: './lab-header.component.html',
  styleUrls: ['./lab-header.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabHeaderComponent extends AbstractTuiThemeSwitcher  implements OnInit {

  public enabled = false;

  public constructor(@Inject(DOCUMENT) documentRef: any) {
    super(documentRef as Document);

  }

  ngOnInit(): void {
  }

}
