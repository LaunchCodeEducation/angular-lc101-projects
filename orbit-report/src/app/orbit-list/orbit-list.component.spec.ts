import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitListComponent } from './orbit-list.component';

describe('OrbitListComponent', () => {
  let component: OrbitListComponent;
  let fixture: ComponentFixture<OrbitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
