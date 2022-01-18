import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizComponent } from './organiz.component';

describe('OrganizComponent', () => {
  let component: OrganizComponent;
  let fixture: ComponentFixture<OrganizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
