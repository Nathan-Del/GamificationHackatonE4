import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveShopComponent } from './eleve-shop.component';

describe('EleveShopComponent', () => {
  let component: EleveShopComponent;
  let fixture: ComponentFixture<EleveShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleveShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
