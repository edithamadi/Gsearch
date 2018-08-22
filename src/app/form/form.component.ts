import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Form } from '../form';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username:''

  findUser(){
    this.userService.getUserInfo(this.username);
    this.userService.getUserRepo(this.username);
    console.log(name)
  }
  constructor(private userService:UserService,private reposService:UserService) { }

  ngOnInit() {
  }

}