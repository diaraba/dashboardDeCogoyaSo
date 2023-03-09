import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonneeComponent } from './abonnee.component';

describe('AbonneeComponent', () => {
  let component: AbonneeComponent;
  let fixture: ComponentFixture<AbonneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
