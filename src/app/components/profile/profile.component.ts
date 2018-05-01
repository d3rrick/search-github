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

 private profile
 private repos
 private username:string
 private repoName:string
 private resp:any
 foundRepo

    constructor(private profileservice:ProfileService) { 
      this.repos = []
     
  }
  findProfile(){
  	this.profileservice.updateProfile(this.username)
  	this.profileservice.searchUser().then( response => this.profile =response);
    
    this.profileservice.getProfileRepos().then((response)=>{
   	this.repos = response
     console.log(this.repos)
   }) 
    
  }
 
  ngOnInit() {
  }

}
