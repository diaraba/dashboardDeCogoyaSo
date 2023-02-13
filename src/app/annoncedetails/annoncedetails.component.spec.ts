import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncedetailsComponent } from './annoncedetails.component';

describe('AnnoncedetailsComponent', () => {
  let component: AnnoncedetailsComponent;
  let fixture: ComponentFixture<AnnoncedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoncedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
