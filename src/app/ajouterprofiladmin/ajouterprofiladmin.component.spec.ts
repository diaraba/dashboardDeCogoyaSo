import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterprofiladminComponent } from './ajouterprofiladmin.component';

describe('AjouterprofiladminComponent', () => {
  let component: AjouterprofiladminComponent;
  let fixture: ComponentFixture<AjouterprofiladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterprofiladminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterprofiladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
