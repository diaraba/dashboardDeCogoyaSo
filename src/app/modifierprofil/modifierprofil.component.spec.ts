import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierprofilComponent } from './modifierprofil.component';

describe('ModifierprofilComponent', () => {
  let component: ModifierprofilComponent;
  let fixture: ComponentFixture<ModifierprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierprofilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
