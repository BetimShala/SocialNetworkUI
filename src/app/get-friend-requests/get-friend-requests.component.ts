import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';
import { FriendShipService } from '../services/friendship.service';

@Component({
  selector: 'app-get-friend-requests',
  templateUrl: './get-friend-requests.component.html',
  styleUrls: ['./get-friend-requests.component.css']
})
export class GetFriendRequestsComponent implements OnInit {

  List: Friend[];
  listCount: number;

  constructor(private friendShipService: FriendShipService) { }

  ngOnInit() {
   this.getFriendRequests(localStorage.getItem('currentUserId'))
  }

  getFriendRequests(currentUserId){
    this.friendShipService.getFriendRequests(currentUserId).subscribe(data=>{
      this.List = data;
      this.listCount = this.List.length
    });
  }

  updateFriendship(userToId,statusId: number){
    const userFromId = localStorage.getItem('currentUserId');
    console.log(userToId);
    this.friendShipService.updateFriendship(userFromId,userToId,statusId).subscribe(
      response => console.log(response),
      err => console.log(err)
    );

    setTimeout(() => {
      this.getFriendRequests(localStorage.getItem('currentUserId'))
    }, 500);
  }

}
