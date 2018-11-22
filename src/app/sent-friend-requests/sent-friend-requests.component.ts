import { Component, OnInit } from '@angular/core';
import { FriendShipService } from '../services/friendship.service';
import { Friend } from '../models/friend';

@Component({
  selector: 'app-sent-friend-requests',
  templateUrl: './sent-friend-requests.component.html',
  styleUrls: ['./sent-friend-requests.component.css']
})
export class SentFriendRequestsComponent implements OnInit {
  List: Friend[];
  constructor(private friendShipService: FriendShipService) { }

  ngOnInit() {
    this.getSentFriendRequests(localStorage.getItem('currentUserId'));
  }

  getSentFriendRequests(currentUserId){
    this.friendShipService.getSentFriendRequests(currentUserId).subscribe(data=>{
      this.List = data;
    });
  }

  declineFriendRequest(userToId,statusId: number){
    const userFromId = localStorage.getItem('currentUserId');
    console.log(userToId);
    this.friendShipService.updateFriendship(userFromId,userToId,statusId).subscribe(
      response => console.log(response),
      err => console.log(err)
    );

    setTimeout(() => {
      this.getSentFriendRequests(localStorage.getItem('currentUserId'));
    }, 500);
  }

}
