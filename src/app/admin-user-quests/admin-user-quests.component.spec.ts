import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserQuestsComponent } from './admin-user-quests.component';

describe('AdminUserQuestsComponent', () => {
  let component: AdminUserQuestsComponent;
  let fixture: ComponentFixture<AdminUserQuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserQuestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserQuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
