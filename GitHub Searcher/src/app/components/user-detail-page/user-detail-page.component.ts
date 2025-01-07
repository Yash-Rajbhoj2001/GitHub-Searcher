import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {
  username : string;
  userDetail : any;
  
  imgurl : string;
  name : string;
  PublicRepositories : string;
  followers : number;
  following : number;
  email : string;
  ProfileLink : string;
  location : string;

  constructor(private route : ActivatedRoute , private githubService :GithubService , private router : Router ) { }

  ngOnInit(): void {
      this.route.params.subscribe(params =>{
           this.username = params['id'];
           console.log("username",this.username);
       })

       this.githubService.getUser(this.username).subscribe({
        
         complete : () => {console.log("success!")},
         error:() => {
        
            alert("error ! search again");
           
            this.router.navigate(['searchuser']);
            
         },
         next : (data : any = []) => {
           this.userDetail = data;
           console.log(this.userDetail);
           this.PublicRepositories = this.userDetail.public_repos;
           this.ProfileLink = this.userDetail.html_url;
           this.followers = this.userDetail.followers;
           this.following = this.userDetail.following;
           this.email = this.userDetail.email;
           this.imgurl = this.userDetail.avatar_url;
           this.location = this.userDetail.location;
           this.name = this.userDetail.name;


           
          }

       })

      

  }

}
