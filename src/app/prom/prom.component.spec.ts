import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromComponent } from './prom.component';

describe('PromComponent', () => {
  let component: PromComponent;
  let fixture: ComponentFixture<PromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromComponent]
    });
    fixture = TestBed.createComponent(PromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
