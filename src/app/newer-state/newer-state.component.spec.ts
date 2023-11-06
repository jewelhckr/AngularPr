import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewerStateComponent } from './newer-state.component';

describe('NewerStateComponent', () => {
  let component: NewerStateComponent;
  let fixture: ComponentFixture<NewerStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewerStateComponent]
    });
    fixture = TestBed.createComponent(NewerStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
