import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FriendShipService } from '../services/friendship.service';
import { Friend } from '../models/friend';
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userFullName: string = "";
  List: Friend[];

  private _hubConnection: HubConnection;
  msgs: Message[] = [];
  constructor(private router: Router,
    private authenticationService: AuthenticationService, private friendShipService: FriendShipService
  ) {
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.userFullName = localStorage.getItem("currentUserFullName");
    this.friendShipService.getFriendsList(localStorage.getItem('currentUserId')).subscribe(data => {
      console.log(data.slice(0, data.length));
      this.List = data.slice(0, data.length - 3);
    });
  }
}