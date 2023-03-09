import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteradministrateurComponent } from './ajouteradministrateur.component';

describe('AjouteradministrateurComponent', () => {
  let component: AjouteradministrateurComponent;
  let fixture: ComponentFixture<AjouteradministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteradministrateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteradministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
