import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import {User} from '../models/user-model'
import {Repo} from '../models/repository-model'


@Injectable()
export class ProfileService {

results:Object[]; 
repoArr:Repo[];
public newArr;
private username = ""
private clientid = "3350722f63d68c2ab763"
private clientsecret = "4427b8b9c1835d48eb7a9cc7f06b0f38c48928b1"
  constructor(private http:Http) { 
     this.results = [];
     this.newArr = [];
     this.username = "muriithiderro"
  }
  searchUser() {
    let apiURL = "https://api.github.com/users/"+ this.username +"?client_id=" +this.clientid+ "&client_secret=" + this.clientsecret;
    return this.http.get(apiURL).map((response)=>response.json()).toPromise().then((item)=>{item
      return new User(
          item.login,
          item.id,
          item.avatar_url,
          item.url,
          item.html_url,
          item.followers_url,
          item.following_url,
          item.gists_url,
          item.starred_url,
          item.subscriptions_url,
          item.organizations_url,
          item.repos_url,
          item.name,
          item.company,
          item.location,
          item.email,
          item.hireable,
          item.bio,
          item.public_repos,
          item.public_gists,
          item.followers,
          item.following)
     }).catch((error)=>console.error(error));
}
getProfileRepos(){
  let apiURL = "https://api.github.com/users/"+ this.username +"/repos?client_id=" +this.clientid+ "&client_secret=" + this.clientsecret;

    return this.http.get(apiURL).map((response)=>response.json()).toPromise().then((res)=>{
      for(let i =0;i<res.length;i++){
        this.repoArr.push(new Repo(
          res[i].name, 
          res[i].html_url,
          res[i].downloads_url))
      }
      return this.repoArr
    }).catch((error)=>console.error(error));
}
updateProfile(username:string ){
  this.repoArr=[]
  this.newArr =[]
  this.username = username
}
 searchRepo(x:string){
   this.newArr = []
   if (this.repoArr){
      for (var j=0; j<this.repoArr.length; j++) {
        this.newArr.push(this.repoArr[j].name)
      }
      return this.newArr
   }
 }
}
