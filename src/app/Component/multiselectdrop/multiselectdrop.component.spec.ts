import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectdropComponent } from './multiselectdrop.component';

describe('MultiselectdropComponent', () => {
  let component: MultiselectdropComponent;
  let fixture: ComponentFixture<MultiselectdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectdropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
