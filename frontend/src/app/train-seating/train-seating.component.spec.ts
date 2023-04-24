import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainSeatingComponent } from './train-seating.component';

describe('TrainSeatingComponent', () => {
  let component: TrainSeatingComponent;
  let fixture: ComponentFixture<TrainSeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainSeatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainSeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
