import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfildetailsComponent } from './profildetails.component';

describe('ProfildetailsComponent', () => {
  let component: ProfildetailsComponent;
  let fixture: ComponentFixture<ProfildetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfildetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfildetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
