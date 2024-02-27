import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteFormComponent } from './arte-form.component';

describe('ArteFormComponent', () => {
  let component: ArteFormComponent;
  let fixture: ComponentFixture<ArteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArteFormComponent]
    });
    fixture = TestBed.createComponent(ArteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
