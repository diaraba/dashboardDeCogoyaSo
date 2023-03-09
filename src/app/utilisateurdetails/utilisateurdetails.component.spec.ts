import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurdetailsComponent } from './utilisateurdetails.component';

describe('UtilisateurdetailsComponent', () => {
  let component: UtilisateurdetailsComponent;
  let fixture: ComponentFixture<UtilisateurdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
