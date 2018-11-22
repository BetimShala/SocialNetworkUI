import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend';
import { AppSettings } from 'appSettings';


@Injectable({
  providedIn: 'root'
})
export class FriendShipService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Friend[]>{
    return this.http.get<Friend[]>(AppSettings.uri+"/api/users");
  }

  getFriendsList(userId: string):Observable<Friend[]>{
    return this.http.get<Friend[]>(
      AppSettings.uri+"/api/friendship/friends/"+userId);
  }

  getNonFriendsList(userId: string,searchPhrase: string):Observable<Friend[]>{
    return this.http.get<Friend[]>(
    AppSettings.uri+"/api/friendship/nonfriends/"+userId+"/"+searchPhrase);
  }

  updateFriendship(userFromId,userToId,statusId){
    console.log(userFromId +"/"+ statusId +"/"+userToId );
    return this.http.put(
      AppSettings.uri+"/api/friendship/updateFriendship",
    {userFromId,
    userToId,
    statusId}
    );
  }

  removeFriendShip(userFromId,userToId){
    return this.http.delete(
      AppSettings.uri+"/api/friendship/removeFriendship/"+userFromId+"/"+userToId
    );
  }

  getSentFriendRequests(userId: string):Observable<Friend[]>{
    return this.http.get<Friend[]>(
    AppSettings.uri+"/api/friendship/sentFriendRequests/"+userId);
  }

  getFriendRequests(userId: string):Observable<Friend[]>{
    return this.http.get<Friend[]>(
    AppSettings.uri+"/api/friendship/getFriendRequests/"+userId);
  }

}
