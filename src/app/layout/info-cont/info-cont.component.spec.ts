import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContComponent } from './info-cont.component';

describe('InfoContComponent', () => {
  let component: InfoContComponent;
  let fixture: ComponentFixture<InfoContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
