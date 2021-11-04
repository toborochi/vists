import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabLatestComponent } from './lab-latest.component';

describe('LabLatestComponent', () => {
  let component: LabLatestComponent;
  let fixture: ComponentFixture<LabLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabLatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
