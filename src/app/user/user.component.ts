import { Component, OnInit } from '@angular/core';

import {User} from '../User'
import {HttpClient} from '@angular/common/http';
import {Repo} from '../../app/repo';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserService],
  styleUrls: ['./user.component.css'],

})
export class UserComponent implements OnInit {
  public searchEdith= 'edithamadi';
  public gitUser:string;


  user:User;
  repo:Repo;
  Searchresults:any;
  username:string;

  constructor(public userService:UserService) { }
  
  findUser(){
    this.userService.updateProfile(this.username)
    this.userService.getUserInfo(this.username)
    this.gitUser = '';
    this.searchEdith = this.username;
    this.ngOnInit();
  }
  

  ngOnInit(){
    this.userService.getUserInfo(this.searchEdith);
    this.user = this.userService.user;

    this.userService.getUserRepo(this.username);
    this.Searchresults = this.userService.newRepo;
  }
}
