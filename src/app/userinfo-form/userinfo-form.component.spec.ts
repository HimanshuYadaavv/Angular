import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoFormComponent } from './userinfo-form.component';

describe('UserinfoFormComponent', () => {
  let component: UserinfoFormComponent;
  let fixture: ComponentFixture<UserinfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserinfoFormComponent]
    });
    fixture = TestBed.createComponent(UserinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
