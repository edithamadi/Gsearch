import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from "../users"
@Injectable({
  providedIn: 'root'
})
export class UserService {
user:User;
private login:string;

  constructor(private http:Http) { }
  this.login = "edithamadi";

  getUserInfo({
    return : this.http.get(" https://api.github.com/users/this.login ")
  })