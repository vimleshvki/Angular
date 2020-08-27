import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudWithApiComponent } from './crud-with-api.component';

describe('CrudWithApiComponent', () => {
  let component: CrudWithApiComponent;
  let fixture: ComponentFixture<CrudWithApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudWithApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudWithApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
