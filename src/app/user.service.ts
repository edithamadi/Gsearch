import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "./User";
import { environment } from "../environments/environment";
import {Repo} from './repo'; 


@Injectable({
  providedIn: 'root'
})

export class UserService {
user:User;
private username:string
repo:Repo;
newRepo :any;


  constructor(private http:HttpClient) { 
  this.user = new User('','','',0,'',0,0,'');
  this.repo = new Repo('','','',);
  this.username = 'edithamadi'
  }

  getUserInfo(username){
    interface ApiResponse{
      name:string;
      login:string;
      avatar_url:string;
      public_repos:number;
      html_url :string;
      followers:number;
      following:number;
      repos_url:string;
    }

    const promise=new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + this.username + environment.userapikey).toPromise().then(response =>{
        this.user.name=response.name;
        this.user.login=response.login;
        this.user.avatar_url=response.avatar_url;
        this.user.public_repos=response.public_repos;
        this.user.html_url=response.html_url;
        this.user.followers=response.followers;
        this.user.following=response.following;
        this.user.repos_url=response.repos_url;
        resolve()
      },

      )
    })
    return promise;
  }

getUserRepo(username){
  interface ApiResponse{
    name:string;
    description:string;
    html_url:string;
  }
const promise=new Promise((resolve,reject)=>{
  this.http.get<ApiResponse>(environment.apiUrl + this.username + environment.repositoryapikey).toPromise().then(response =>{

    this.newRepo=response;
    console.log(this.newRepo);

    resolve()
  },

)
})

return promise;
}
updateProfile(username:string){
  this.username = username
}

}