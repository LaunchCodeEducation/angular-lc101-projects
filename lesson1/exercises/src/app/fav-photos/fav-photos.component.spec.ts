import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPhotosComponent } from './fav-photos.component';

describe('FavPhotosComponent', () => {
  let component: FavPhotosComponent;
  let fixture: ComponentFixture<FavPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
