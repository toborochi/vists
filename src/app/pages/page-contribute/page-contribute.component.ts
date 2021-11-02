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

  

  selectedFrom : string;
  selectedRelation: string;
  selectedTo: string;

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

    this.showDialog();
  }

  showDialog() {
    this.dialogService
      .open('Gracias por tu contribución.', { label: 'Finalizado', size: 's' })
      .subscribe();
  }

  CreateNew(){
    alert("Create New Clicked")
  }
}
