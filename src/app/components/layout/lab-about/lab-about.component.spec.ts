import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAboutComponent } from './lab-about.component';

describe('LabAboutComponent', () => {
  let component: LabAboutComponent;
  let fixture: ComponentFixture<LabAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
