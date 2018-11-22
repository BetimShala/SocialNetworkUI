import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendShipService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Friend[]>{
    return this.http.get<Friend[]>("https://localhost:44392/api/users");
  }

  getFriendsList(userId: string):Observable<Friend[]>{
    return this.http.get<Friend[]>(
    "https://localhost:44392/api/friendship/friends/"+userId);
  }

  getNonFriendsList(userId: string,searchPhrase: string):Observable<Friend[]>{
    return this.http.get<Friend[]>(
    "https://localhost:44392/api/friendship/nonfriends/"+userId+"/"+searchPhrase);
  }

  updateFriendship(userFromId,userToId,statusId){
    console.log(userFromId +"/"+ statusId +"/"+userToId );
    return this.http.put(
      "https://localhost:44392/api/friendship/updateFriendship",
    {userFromId,
    userToId,
    statusId}
    );
  }

  removeFriendShip(userFromId,userToId){
    return this.http.delete(
      "https://localhost:44392/api/friendship/removeFriendship/"+userFromId+"/"+userToId
    );
  }

  getSentFriendRequests(userId: string):Observable<Friend[]>{
    return this.http.get<Friend[]>(
    "https://localhost:44392/api/friendship/sentFriendRequests/"+userId);
  }

  getFriendRequests(userId: string):Observable<Friend[]>{
    return this.http.get<Friend[]>(
    "https://localhost:44392/api/friendship/getFriendRequests/"+userId);
  }

}
