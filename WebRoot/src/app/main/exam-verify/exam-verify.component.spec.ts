import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamVerifyComponent } from './exam-verify.component';

describe('ExamVerifyComponent', () => {
  let component: ExamVerifyComponent;
  let fixture: ComponentFixture<ExamVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
