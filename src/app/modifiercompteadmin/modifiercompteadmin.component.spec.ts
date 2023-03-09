import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercompteadminComponent } from './modifiercompteadmin.component';

describe('ModifiercompteadminComponent', () => {
  let component: ModifiercompteadminComponent;
  let fixture: ComponentFixture<ModifiercompteadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiercompteadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiercompteadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
