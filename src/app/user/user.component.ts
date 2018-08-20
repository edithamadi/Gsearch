import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {Repo} from '../../app/repo.ts'
import { UserService } from '../app/user.service';
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

  ngOnInit() { 
  
    interface ApiResponse{
      repo:string;
      user:string
  }  

  this.http.get(" https://api.github.com/users/this.login ").subscribe(data=>)
  this.repo= new Repo(data.repo,data.user)
},err=>{
  this.repo=new Repo("request not found ")
    console.log("Error occured")
    })
  }

}
