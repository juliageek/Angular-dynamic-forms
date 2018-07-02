import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingUserPageComponent } from './existing-user-page.component';

describe('ExistingUserPageComponent', () => {
  let component: ExistingUserPageComponent;
  let fixture: ComponentFixture<ExistingUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
