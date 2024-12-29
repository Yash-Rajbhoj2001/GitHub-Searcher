import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private  http : HttpClient) { }

    url : string = "https://api.github.com/users/";

    getUser(userId : string){
       return this.http.get(this.url+userId);
    } 
    
}
