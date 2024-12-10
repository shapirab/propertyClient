import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInfoTabsComponent } from './property-info-tabs.component';

describe('PropertyInfoTabsComponent', () => {
  let component: PropertyInfoTabsComponent;
  let fixture: ComponentFixture<PropertyInfoTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInfoTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInfoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
