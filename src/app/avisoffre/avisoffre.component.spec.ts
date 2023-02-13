import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoffreComponent } from './avisoffre.component';

describe('AvisoffreComponent', () => {
  let component: AvisoffreComponent;
  let fixture: ComponentFixture<AvisoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
