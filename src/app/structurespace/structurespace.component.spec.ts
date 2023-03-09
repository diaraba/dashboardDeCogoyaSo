import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurespaceComponent } from './structurespace.component';

describe('StructurespaceComponent', () => {
  let component: StructurespaceComponent;
  let fixture: ComponentFixture<StructurespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructurespaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructurespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
