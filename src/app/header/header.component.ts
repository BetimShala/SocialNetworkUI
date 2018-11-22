import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Subscription } from 'rxjs';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  status: boolean;
  subscription:Subscription;
 
  private _hubConnection: HubConnection;
  msgs: Message[] = [];
  showMessage:boolean=true;
  userFullName :string="";
   constructor(private authService:AuthenticationService) {     
   }
 
   ngOnInit() {
    this.subscription = this.authService.currentUser.subscribe(status => this.status = status);
    this.userFullName = localStorage.getItem("currentUserFullName");

    this._hubConnection = new HubConnectionBuilder().withUrl('https://localhost:44392/notify').build();
    
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('BroadcastMessage', (type: string, payload: string) => {
      this.msgs.push({ severity: type, summary: payload });
      
      if((this.msgs[this.msgs.length-1]['summary'].includes(this.userFullName ))){
        console.log(this.msgs[this.msgs.length-1]['summary']);
        this.showMessage=false;
      }
  });
   }
   logout() {
    this.authService.logout();
}

}
