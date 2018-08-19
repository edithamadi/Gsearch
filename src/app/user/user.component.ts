import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import {User} from '../quote-class/'
import { UserService } from '../../services/userservice';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any[];
  repos:any[];
  
  constructor(userService:UserService,private http:HttpClient) {
  this.users = userService.getUsers()
   }

  this.http.get(" https://api.github.com/users/this.login ")
  ngOnInit() {
  }

}
