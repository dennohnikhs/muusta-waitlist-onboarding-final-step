import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShippingMethodComponent } from './add-shipping-method.component';

describe('AddShippingMethodComponent', () => {
  let component: AddShippingMethodComponent;
  let fixture: ComponentFixture<AddShippingMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddShippingMethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddShippingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
