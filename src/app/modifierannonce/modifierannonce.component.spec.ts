import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierannonceComponent } from './modifierannonce.component';

describe('ModifierannonceComponent', () => {
  let component: ModifierannonceComponent;
  let fixture: ComponentFixture<ModifierannonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierannonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
