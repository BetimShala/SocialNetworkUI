import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {GrowlModule,Message} from 'primeng/primeng';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { MyconnectionsComponent } from './myconnections/myconnections.component';
import { FindFriendsComponent } from './find-friends/find-friends.component';
import { SentFriendRequestsComponent } from './sent-friend-requests/sent-friend-requests.component';
import { GetFriendRequestsComponent } from './get-friend-requests/get-friend-requests.component';
import { MatCardModule  } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MyconnectionsComponent,
    FindFriendsComponent,
    SentFriendRequestsComponent,
    GetFriendRequestsComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule ,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
