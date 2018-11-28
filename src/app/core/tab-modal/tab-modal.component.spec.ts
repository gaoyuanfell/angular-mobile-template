import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabModalComponent } from './tab-modal.component';

describe('TabModalComponent', () => {
  let component: TabModalComponent;
  let fixture: ComponentFixture<TabModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
