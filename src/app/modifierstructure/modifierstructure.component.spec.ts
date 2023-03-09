import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierstructureComponent } from './modifierstructure.component';

describe('ModifierstructureComponent', () => {
  let component: ModifierstructureComponent;
  let fixture: ComponentFixture<ModifierstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierstructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
