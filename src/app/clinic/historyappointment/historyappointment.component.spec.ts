import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryappointmentComponent } from './historyappointment.component';

describe('HistoryappointmentComponent', () => {
  let component: HistoryappointmentComponent;
  let fixture: ComponentFixture<HistoryappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
