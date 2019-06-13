import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text3Component } from './text3.component';

describe('Text3Component', () => {
  let component: Text3Component;
  let fixture: ComponentFixture<Text3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
