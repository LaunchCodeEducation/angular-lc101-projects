import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoresListComponent } from './chores-list.component';

describe('ChoresListComponent', () => {
  let component: ChoresListComponent;
  let fixture: ComponentFixture<ChoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
