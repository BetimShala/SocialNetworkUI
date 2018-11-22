import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import {AppSettings} from "appSettings";
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<boolean>;
  public currentUser: Observable<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<boolean>(Boolean(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): boolean {
    return this.currentUserSubject.value;
  }


  register(user: User) {
    console.log(user);
    return this.http.post(AppSettings.uri+`/api/auth/register`, user);
  }

  login(email: string, password: string, returnUrl: string) {
    return this.http.post(AppSettings.uri+`/api/auth/login`, { email, password }, { responseType: 'json' })
      .subscribe(data => {
        console.log(data);
        if (data!=false) {

          localStorage.setItem('currentUser', data['token'].toString());
          localStorage.setItem('currentUserId', data['userId'].toString());
          localStorage.setItem('currentUserFullName', data['fullName'].toString());
          this.currentUserSubject.next(true);
          this.router.navigate([returnUrl]);
        }
        else {
          this.router.navigateByUrl('/');
        }
      })

  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/login');
  }
}
