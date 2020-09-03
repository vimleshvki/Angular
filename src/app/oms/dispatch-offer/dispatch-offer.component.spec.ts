import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchOfferComponent } from './dispatch-offer.component';

describe('DispatchOfferComponent', () => {
  let component: DispatchOfferComponent;
  let fixture: ComponentFixture<DispatchOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
