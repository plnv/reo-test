import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilaogComponent } from './dilaog.component';

describe('DilaogComponent', () => {
  let component: DilaogComponent;
  let fixture: ComponentFixture<DilaogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DilaogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilaogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
