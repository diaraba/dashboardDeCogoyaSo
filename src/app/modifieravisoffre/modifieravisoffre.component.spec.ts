import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieravisoffreComponent } from './modifieravisoffre.component';

describe('ModifieravisoffreComponent', () => {
  let component: ModifieravisoffreComponent;
  let fixture: ComponentFixture<ModifieravisoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieravisoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifieravisoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
