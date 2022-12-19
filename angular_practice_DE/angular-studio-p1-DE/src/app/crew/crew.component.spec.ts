import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewComponent } from './crew.component';

describe('CrewComponent', () => {
  let component: CrewComponent;
  let fixture: ComponentFixture<CrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
