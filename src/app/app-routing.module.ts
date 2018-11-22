import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyconnectionsComponent } from './myconnections/myconnections.component';
import { FindFriendsComponent } from './find-friends/find-friends.component';
import { SentFriendRequestsComponent } from './sent-friend-requests/sent-friend-requests.component';
import { GetFriendRequestsComponent } from './get-friend-requests/get-friend-requests.component';
import { HomeComponent } from './home/home.component';
//
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'friends/all',component:MyconnectionsComponent},
  { path: 'friends/new',component:FindFriendsComponent},
  { path: 'friends/req/sent',component:SentFriendRequestsComponent},
  { path: 'friends/req/recv',component:GetFriendRequestsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
