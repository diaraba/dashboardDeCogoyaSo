import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterprofilComponent } from './ajouterprofil.component';

describe('AjouterprofilComponent', () => {
  let component: AjouterprofilComponent;
  let fixture: ComponentFixture<AjouterprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterprofilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
