import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierprofiladminComponent } from './modifierprofiladmin.component';

describe('ModifierprofiladminComponent', () => {
  let component: ModifierprofiladminComponent;
  let fixture: ComponentFixture<ModifierprofiladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierprofiladminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierprofiladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
