import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyconnectionsComponent } from './myconnections.component';

describe('MyconnectionsComponent', () => {
  let component: MyconnectionsComponent;
  let fixture: ComponentFixture<MyconnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyconnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyconnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
