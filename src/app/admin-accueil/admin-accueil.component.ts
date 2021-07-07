import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-admin-accueil',
  templateUrl: './admin-accueil.component.html',
  styleUrls: ['./admin-accueil.component.css']
})
export class AdminAccueilComponent implements OnInit {
  sessionValue: string = "";
  quests: any;
  

  constructor(private dataService: DataService, private router: Router, private _router: Router, private _location: Location) { }

  ngOnInit(): void {
    
    this.sessionValue = localStorage.getItem("isLogin");
    if(this.sessionValue == "true")
    {
      
    }
    else{
      this.router.navigateByUrl(`/`);
    }

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
    this.router.navigateByUrl(`/admin/shop`)
  }

  AddQuest(){
    this.router.navigateByUrl(`/admin/addQuest`)
  }

  ModifQuest(id: number){
    this.router.navigateByUrl(`/admin/modifQuest/${id}`)
  }

  UserQuest(){
    this.router.navigateByUrl(`/admin/userQuest`)
  }

  DeleteQuest(id: number){
    this.dataService.deleteQuest(id).subscribe(
      (response: any) =>
      {
        console.log("Delete Quest : ", response);
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
