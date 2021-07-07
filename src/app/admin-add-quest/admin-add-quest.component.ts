import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-admin-add-quest',
  templateUrl: './admin-add-quest.component.html',
  styleUrls: ['./admin-add-quest.component.css']
})
export class AdminAddQuestComponent implements OnInit {
  sessionValue: string = "";
  //Form
  inputNameQuest: string;
  inputDescriptionQuest: string;
  inputCreditQuest: number;

  constructor(private dataService: DataService, private router: Router, private _router: Router, private _location: Location) { }

  ngOnInit(): void {
    this.sessionValue = localStorage.getItem("isLogin");
    if(this.sessionValue == "true")
    {
      
    }
    else{
      this.router.navigateByUrl(`/`);
    }

    
  }

  AdminAccueil(){
    this.router.navigateByUrl(`/admin`)
  }

  CreateQuest(){
    var newQuest = 
    {
      name: this.inputNameQuest,
      description: this.inputDescriptionQuest,
      status: 'Disponible',
      credit: this.inputCreditQuest
    }
    this.dataService.postQuest(newQuest).subscribe(
      (response: any) => 
      {
        console.log("Create quest response : ", response);
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

}
