import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient} from '@angular/common/http';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers:[UserService],
})
export class RepoComponent implements OnInit {
  repo:Repo;
  constructor(private userService:UserService, public reposService:UserService) { }
  
  ngOnInit() {
  }
  
}
