import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAddressFormComponent } from './property-address-form.component';

describe('PropertyAddressFormComponent', () => {
  let component: PropertyAddressFormComponent;
  let fixture: ComponentFixture<PropertyAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
