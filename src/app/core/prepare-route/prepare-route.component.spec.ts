import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareRouteComponent } from './prepare-route.component';

describe('PrepareRouteComponent', () => {
  let component: PrepareRouteComponent;
  let fixture: ComponentFixture<PrepareRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
