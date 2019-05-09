import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaredComponent } from './lared.component';

describe('LaredComponent', () => {
  let component: LaredComponent;
  let fixture: ComponentFixture<LaredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
