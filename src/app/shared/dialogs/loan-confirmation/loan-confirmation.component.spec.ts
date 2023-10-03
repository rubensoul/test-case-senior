import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanConfirmationComponent } from './loan-confirmation.component';

describe('LoanConfirmationComponent', () => {
  let component: LoanConfirmationComponent;
  let fixture: ComponentFixture<LoanConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
