import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-session',
  templateUrl: './game-session.component.html',
  styleUrls: ['./game-session.component.css']
})
export class GameSessionComponent implements OnInit {
  sessionValue: string = "";
  inputUsername: string;
  inputPassword: string;
  body: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    //localStorage.removeItem("loginRole");
    this.sessionValue = localStorage.getItem("loginRole");
    console.log(this.sessionValue);
    if(this.sessionValue == "admin"){
      this.router.navigateByUrl(`/admin`);
    }
    else if(this.sessionValue == "eleve"){
      this.router.navigateByUrl(`/eleve`);
    }
    else{
      this.router.navigateByUrl(`/`);
    }

  }

  LoginUser(){

    this.body = { username : this.inputUsername, 
                  password : this.inputPassword };

    console.log(this.body);

    this.dataService.postLogin(this.body).subscribe(
      (response: any) => 
      {
        console.log("response : ", response);
        localStorage.setItem("token-session", response.token);
        localStorage.setItem("user-session-id", response.user_id);
      
        this.dataService.getUser(response.user_id, response.token).subscribe(
          (userResponse: any) =>
          {
            console.log("userResponse : ", userResponse);
            if(response.success)
            {
              localStorage.setItem("isLogin", "true");
              if(userResponse.admin)
              {
                localStorage.setItem("loginRole", "admin");
                this.router.navigateByUrl(`/admin`);
              }
              else
              {
                localStorage.setItem("loginRole", "eleve");
                this.router.navigateByUrl(`/eleve`);
              }
            }
          }
        )
      },
      (error: any) => 
      {
        console.log("ERROR : ", error);
      }
    )
    
  }

}
