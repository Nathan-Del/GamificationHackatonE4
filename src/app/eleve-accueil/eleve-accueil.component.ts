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
  DispoCondition: Boolean;
  EnCourCondition: Boolean;
  FinCondition: Boolean;

  

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


        //GET ALL QUEST
        this.dataService.getQuest().subscribe(
          (response: any) => 
          {
            console.log("Quest Response : ", response);
            this.quests = response;
            for(let i = 0; i < this.quests.length; i++){

              console.log("quests tab : ", this.quests[i]._id);
              //console.log("UserResponse quests : ", UserResponse.quests.length);

              for(let u = 0; u < UserResponse.quests.length; u++){
                console.log("fin : ", UserResponse.finishQuests[u]);
                console.log("quest : ", UserResponse.quests[u]._id)
                // if(this.quests[i]._id != UserResponse.quests[u]._id || this.quests[i]._id != UserResponse.finishQuests[u])
                // {
                //   this.Condition = true;
                // }
                // else{
                //   this.Condition = false;
                // }
                
                
                if(this.quests[i]._id != UserResponse.quests[u]._id){

                  if(this.quests[i]._id != UserResponse.finishQuests[u]){
                    console.log("DISPO");
                    this.DispoCondition = true;
                    this.FinCondition = false;
                    this.EnCourCondition = false;
                  }
                  else{
                    console.log("FIN");
                    this.FinCondition = true;
                    this.DispoCondition = false;
                    this.EnCourCondition = false;
                  }


                  
                }else{
                  console.log("EN COURS");
                  this.EnCourCondition = true;
                  this.DispoCondition = false;
                  this.FinCondition = false;
                }

              }
            }
            // console.log("tab : ", this.quests);
          }
        )
        
        
        
      }
    )

    //for (let pas = 0; pas < 5; pas++)

    
    

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
    //var statusQuest = { status: 'En cours'};
    var tabQuests: any [] = [];
    

    this.dataService.getUser(this.userIDsession, this.tokenSession).subscribe(
      (response: any) =>
      {
        response.quests.push(id);
        tabQuests = response.quests;
        var updateQuests = {
          quests: tabQuests
        }
        
        this.dataService.putUser(this.userIDsession, updateQuests, this.tokenSession).subscribe(
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
