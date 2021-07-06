import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-session',
  templateUrl: './game-session.component.html',
  styleUrls: ['./game-session.component.css']
})
export class GameSessionComponent implements OnInit {
  inputUsername: string;
  inputPassword: string;
  body: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  LoginUser(){
    // this.body.push(this.inputUsername);
    // this.body.push(this.inputPassword);

    this.body = { username : this.inputUsername, 
                  password : this.inputPassword };

    console.log(this.body);

    this.dataService.postLogin(this.body).subscribe(
      (response: any) => 
      {
        console.log("response : " + response);
        sessionStorage.setItem("token-session", response.token);
      
        this.dataService.getUser(response.user_id, response.token).subscribe(
          (userResponse: any) =>
          {
            console.log("userResponse : " + userResponse);
            if(response.sucess)
            {
              sessionStorage.setItem("isLogin", "true");
              if(userResponse.admin)
              {
                this.router.navigateByUrl(`/admin`);
              }
              else
              {
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
