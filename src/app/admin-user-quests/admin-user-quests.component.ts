import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-admin-user-quests',
  templateUrl: './admin-user-quests.component.html',
  styleUrls: ['./admin-user-quests.component.css']
})
export class AdminUserQuestsComponent implements OnInit {
  sessionValue: string = "";
  tokenSession: string = "";
  allUser: any;
  infoQuest: any;
  allQuest: any;

  constructor(private dataService: DataService, private router: Router, private _router: Router, private _location: Location) { }

  ngOnInit(): void {

    this.tokenSession = localStorage.getItem("token-session");

    this.dataService.getAllUser(this.tokenSession).subscribe(
      (response: any) => 
      {
        console.log("All User Response : ", response);
        this.allUser = response;
        //console.log("taille : ", this.allUser.length);
        
      }
    )

    this.dataService.getQuest().subscribe(
      (response: any) =>
      {
        this.allQuest = response;
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

  FinishQuest(userID, questID, reward){
    var UserCredits: number = 0;    
    var tabFinishQuest: any [] = [];
    var tabQuests: any [] = [];

    this.dataService.getUser(userID, this.tokenSession).subscribe(
      (response: any)=>
      {
        UserCredits = response.credits;
        //let index = a.findIndex(x => x.LastName === "Skeet");
        var index = response.quests.findIndex(x => x._id === questID)
        console.log("index : ",index);
        response.finishQuests.push(questID);
        tabFinishQuest = response.finishQuests;
        
        response.quests.splice(index, 1);
        tabQuests = response.quests;

        UserCredits  = UserCredits + reward;
        var updateCredit = {
          credits: UserCredits,
          finishQuests: tabFinishQuest,
          quests: tabQuests
        }
        
        console.log("Update : ", updateCredit);

        this.dataService.putUser(userID, updateCredit, this.tokenSession).subscribe(
          (response: any) =>
          {
            console.log("response update credits : ", response);
          }
        )
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
