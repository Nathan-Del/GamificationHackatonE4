import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddQuestComponent } from './admin-add-quest.component';

describe('AdminAddQuestComponent', () => {
  let component: AdminAddQuestComponent;
  let fixture: ComponentFixture<AdminAddQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
