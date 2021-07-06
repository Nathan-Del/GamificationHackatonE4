import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveAccueilComponent } from './eleve-accueil.component';

describe('EleveAccueilComponent', () => {
  let component: EleveAccueilComponent;
  let fixture: ComponentFixture<EleveAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleveAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
