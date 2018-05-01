import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service'
import {User} from '../../models/user-model'
import {Repo} from '../../models/repository-model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 public profile
 public repos
 public username:string
 public repoName:string
 public resp:any


    constructor(private profileservice:ProfileService) { 
      this.repos = []
     
  }
  findProfile(){
  	this.profileservice.updateProfile(this.username)
  	this.profileservice.searchUser().then( response => this.profile =response);
    
    this.profileservice.getProfileRepos().then((response)=>{
   	this.repos = response
   }) 
    
  }
 
  ngOnInit() {
  }

}
