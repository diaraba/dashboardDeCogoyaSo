import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteravisoffreComponent } from './ajouteravisoffre.component';

describe('AjouteravisoffreComponent', () => {
  let component: AjouteravisoffreComponent;
  let fixture: ComponentFixture<AjouteravisoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteravisoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteravisoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
