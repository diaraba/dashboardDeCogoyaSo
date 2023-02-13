import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoffredetailsComponent } from './avisoffredetails.component';

describe('AvisoffredetailsComponent', () => {
  let component: AvisoffredetailsComponent;
  let fixture: ComponentFixture<AvisoffredetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoffredetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoffredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
