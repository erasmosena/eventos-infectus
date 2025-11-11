import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleClubComponent } from './motorcycle-club.component';

describe('MotorcycleClubComponent', () => {
  let component: MotorcycleClubComponent;
  let fixture: ComponentFixture<MotorcycleClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
