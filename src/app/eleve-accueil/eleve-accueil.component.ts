import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-eleve-accueil',
  templateUrl: './eleve-accueil.component.html',
  styleUrls: ['./eleve-accueil.component.css']
})
export class EleveAccueilComponent implements OnInit {
  sessionValue: string = "";
  tokenSession: string = "";
  userIDsession: string = "";
  User: any;
  quests: any;
  

  constructor(private dataService: DataService, private router: Router,  private _router: Router, private _location: Location) { }

  ngOnInit(): void {
    this.sessionValue = localStorage.getItem("isLogin");
    console.log(this.sessionValue);
    if(this.sessionValue == "true")
    {
      //console.log(this.sessionValue);
      //this.router.navigateByUrl(`/`);
    }
    else{
      this.router.navigateByUrl(`/`);
    }

    //GET USER INFO
    this.tokenSession = localStorage.getItem("token-session");
    console.log(this.tokenSession);

    this.userIDsession = localStorage.getItem("user-session-id");
    console.log(this.userIDsession);

    this.dataService.getUser(this.userIDsession, this.tokenSession).subscribe(
      (UserResponse: any) => 
      {
        console.log("User Response : ", UserResponse);
        this.User = UserResponse;
      }
    )


    //GET ALL QUEST
    this.dataService.getQuest().subscribe(
      (response: any) => 
      {
        console.log("Quest Response : ", response);
        this.quests = response;
        console.log("tab : ", this.quests);
      }
    )

  }

  Logout(){
    localStorage.removeItem("loginRole");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token-session");
    localStorage.removeItem("user-session-id");
    this.router.navigateByUrl(`/`);
  }

  Shop(){
    this.router.navigateByUrl(`/eleve/shop`)
  }

  // // const body = { title: 'Angular PUT Request Example' };
  // //   this.http.put<Article>('https://jsonplaceholder.typicode.com/posts/1', body)

  AcceptQuest(id){
    var statusQuest = { status: 'En cours'};
    this.dataService.putQuest(id, statusQuest).subscribe(
      (response: any) =>
      {
        console.log("Accept Quest : ", response);
      }
    )
    this.reloadPage();
  }

  reloadPage(){
    this._router
    // skipLocationChange : When true, navigates without pushing a new state into history.
    // (Pas de retour possible en cliquant sur le bouton précédent du navigateur)
    .navigateByUrl("/", { skipLocationChange: true }) // 1. rediriger vers l'url racine
    .then(() => {
      console.log(decodeURI(this._location.path())); // 2. rediregier vers l'url courant
      // rediriger vers la page courante
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

}
