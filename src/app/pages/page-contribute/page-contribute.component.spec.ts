/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageContributeComponent } from './page-contribute.component';

describe('PageContributeComponent', () => {
  let component: PageContributeComponent;
  let fixture: ComponentFixture<PageContributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
