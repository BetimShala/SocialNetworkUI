import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentFriendRequestsComponent } from './sent-friend-requests.component';

describe('SentFriendRequestsComponent', () => {
  let component: SentFriendRequestsComponent;
  let fixture: ComponentFixture<SentFriendRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentFriendRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentFriendRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
