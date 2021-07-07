import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifShopComponent } from './admin-modif-shop.component';

describe('AdminModifShopComponent', () => {
  let component: AdminModifShopComponent;
  let fixture: ComponentFixture<AdminModifShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
