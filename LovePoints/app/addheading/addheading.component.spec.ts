import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddheadingComponent } from './addheading.component';

describe('AddheadingComponent', () => {
  let component: AddheadingComponent;
  let fixture: ComponentFixture<AddheadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddheadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
