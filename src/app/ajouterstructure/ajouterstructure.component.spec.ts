import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterstructureComponent } from './ajouterstructure.component';

describe('AjouterstructureComponent', () => {
  let component: AjouterstructureComponent;
  let fixture: ComponentFixture<AjouterstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterstructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
