import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredetailsComponent } from './structuredetails.component';

describe('StructuredetailsComponent', () => {
  let component: StructuredetailsComponent;
  let fixture: ComponentFixture<StructuredetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuredetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
