import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollContentComponent } from './scroll-content.component';

describe('ScrollContentComponent', () => {
  let component: ScrollContentComponent;
  let fixture: ComponentFixture<ScrollContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
