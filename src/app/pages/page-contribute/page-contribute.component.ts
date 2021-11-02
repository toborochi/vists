import { GraphService } from './../../services/graph.service';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { TuiDialogService } from '@taiga-ui/core';

@Component({
  selector: 'app-page-contribute',
  templateUrl: './page-contribute.component.html',
  styleUrls: ['./page-contribute.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContributeComponent {
  readonly relations$ = new Observable<string[]>();
  readonly nodes$ = new Observable<string[]>();

  u = '';
  v = '';

  testValue = new FormControl(this.relations$[0]);
  testValue2 = new FormControl(this.nodes$[0]);
  testValue3 = new FormControl(this.nodes$[0]);

  constructor(
    private graphService: GraphService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService
  ) {
    this.relations$ = this.graphService.getRelations();
    this.nodes$ = this.graphService.getNodes();
  }

  testForm = new FormControl();

  testForm2 = new FormControl();

  submitContribution() {
    console.log(this.testValue2.value);
    console.log(this.testValue.value);
    console.log(this.testValue3.value);
    console.log(this.testForm.value)


    this.testValue = new FormControl(this.relations$[0]);
    this.testValue2 = new FormControl(this.nodes$[0]);
    this.testValue3 = new FormControl(this.nodes$[0]);



    this.showDialog();
  }

  showDialog() {
    this.dialogService
      .open('Gracias por tu contribución.', { label: 'Finalizado', size: 's' })
      .subscribe();
  }
}
