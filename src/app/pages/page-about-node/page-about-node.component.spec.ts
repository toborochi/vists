import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutNodeComponent } from './page-about-node.component';

describe('PageAboutNodeComponent', () => {
  let component: PageAboutNodeComponent;
  let fixture: ComponentFixture<PageAboutNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAboutNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
