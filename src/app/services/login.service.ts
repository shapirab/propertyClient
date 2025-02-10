import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string = 'https://localhost:7091/api';
  constructor(private http: HttpClient) { }

  login(user:User){
    this.http.post(`${this.baseUrl}/authenticate`, user);
  }

  register(user:User){
    this.http.post(`${this.baseUrl}/register`, user);
  }
}
