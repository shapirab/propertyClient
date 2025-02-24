import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { BehaviorSubject, map } from 'rxjs';
import { UserDto } from '../Models/dto/userDto';
import { LoggedinUserDto } from '../Models/dto/loggedinUserDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string = 'https://localhost:7091/api';
  private currentUserSource = new BehaviorSubject<LoggedinUserDto | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }

  login(userDto:UserDto){
    return this.http.post(`${this.baseUrl}/login/authenticate`, userDto).pipe(
      map((res: LoggedinUserDto) => {
        let user = res;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(user:User){
    return this.http.post(`${this.baseUrl}/register`, user).pipe(
      map((user) => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  setCurrentUser(user: LoggedinUserDto){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
