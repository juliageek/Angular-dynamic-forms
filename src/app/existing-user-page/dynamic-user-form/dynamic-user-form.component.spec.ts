import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUserFormComponent } from './dynamic-user-form.component';

describe('DynamicUserFormComponent', () => {
  let component: DynamicUserFormComponent;
  let fixture: ComponentFixture<DynamicUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
