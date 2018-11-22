import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';
import { FriendShipService } from '../services/friendship.service';

@Component({
  selector: 'app-myconnections',
  templateUrl: './myconnections.component.html',
  styleUrls: ['./myconnections.component.css']
})
export class MyconnectionsComponent implements OnInit {

  myConnections: Friend[];
  constructor(private friendService: FriendShipService) { }
  ngOnInit() {
    this.getMyConnections(localStorage.getItem('currentUserId'));


  }

  getMyConnections(userId){
    this.friendService.getFriendsList(userId).subscribe(data=>{
      this.myConnections = data;
      console.log(data);
    })
  }

  removeFriendShip(userToId,statusId){
    const userFromId = localStorage.getItem('currentUserId');
    console.log(userToId);
    this.friendService.removeFriendShip(userFromId,userToId).subscribe(
      response => console.log(response),
      err => console.log(err)
    );;
    setTimeout(() => {
      this.getMyConnections(userFromId);
    }, 500);
  }

}
