import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFriendRequestsComponent } from './get-friend-requests.component';

describe('GetFriendRequestsComponent', () => {
  let component: GetFriendRequestsComponent;
  let fixture: ComponentFixture<GetFriendRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFriendRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFriendRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
