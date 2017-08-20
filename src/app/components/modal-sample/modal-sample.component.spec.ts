import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSampleComponent } from './modal-sample.component';

describe('ModalSampleComponent', () => {
  let component: ModalSampleComponent;
  let fixture: ComponentFixture<ModalSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
