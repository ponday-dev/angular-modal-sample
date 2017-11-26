import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEntryComponent } from './modal-entry.component';

describe('ModalEntryComponent', () => {
  let component: ModalEntryComponent;
  let fixture: ComponentFixture<ModalEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
