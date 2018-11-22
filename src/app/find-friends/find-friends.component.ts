import { Component, OnInit } from '@angular/core';
import { FriendShipService } from '../services/friendship.service';
import { Friend } from '../models/friend';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-find-friends',
  templateUrl: './find-friends.component.html',
  styleUrls: ['./find-friends.component.css']
})
export class FindFriendsComponent implements OnInit {
  List: Friend[];
  searchPhrase: string="";
  constructor(private friendShipService: FriendShipService,private http: HttpClient) { }


  ngOnInit() {
    this.getNonFriendsList(localStorage.getItem('currentUserId'),this.searchPhrase);

    
  }

  getNonFriendsList(currentUserId,searchPhrase){
    this.friendShipService.getNonFriendsList(currentUserId,searchPhrase).subscribe(data=>{
      this.List = data;
    });
  }

  updateFriendship(userToId,statusId: number){
    const type = "Success";
    const Payload = localStorage.getItem('currentUserFullName')+" has sent you a friend request";
    this.http.post(
      "https://localhost:44392/api/message",
    {type,
      Payload}
    ).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
    const userFromId = localStorage.getItem('currentUserId');
    console.log(userToId);
    this.friendShipService.updateFriendship(userFromId,userToId,statusId).subscribe(
      response => console.log(response),
      err => console.log(err)
    );

    setTimeout(() => {
      this.getNonFriendsList(localStorage.getItem('currentUserId'),this.searchPhrase);
    }, 500);
    
  }

  
  

}
