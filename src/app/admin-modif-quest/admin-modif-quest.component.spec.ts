import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifQuestComponent } from './admin-modif-quest.component';

describe('AdminModifQuestComponent', () => {
  let component: AdminModifQuestComponent;
  let fixture: ComponentFixture<AdminModifQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
