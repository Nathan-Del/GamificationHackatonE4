import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-admin-modif-quest',
  templateUrl: './admin-modif-quest.component.html',
  styleUrls: ['./admin-modif-quest.component.css']
})
export class AdminModifQuestComponent implements OnInit {
  questID: string;
  sessionValue: string = "";
  quest: any;

  //Form
  inputNameQuest: string;
  inputDescriptionQuest: string;
  inputStatusQuest: string;
  inputCreditQuest: number;

  constructor(private dataService: DataService, private router: Router, private _router: Router, private _location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.questID = this.route.snapshot.params.id;
    // this.sessionValue = localStorage.getItem("isLogin");
    // if(this.sessionValue == "true")
    // {
      
    // }
    // else{
    //   this.router.navigateByUrl(`/`);
    // }


    this.dataService.getQuestbyId(this.questID).subscribe(
      (response: any) =>
      {
        console.log("QuestByID Response : ", response);
        this.quest = response;
        this.inputNameQuest = this.quest.name;
        this.inputDescriptionQuest = this.quest.description;
        this.inputStatusQuest = this.quest.status;
        this.inputCreditQuest = this.quest.credit;
      }
    )

    
  }

  ModifQuest(){
    var modifQuest = 
    {
      name: this.inputNameQuest,
      description: this.inputDescriptionQuest,
      status: this.inputStatusQuest,
      credit: this.inputCreditQuest
    }
    this.dataService.putQuest(this.questID, modifQuest).subscribe(
      (response: any) =>
      {
        console.log("ModifQuest Response : ", response);
        
      }
    )
  }

  AdminAccueil(){
    this.router.navigateByUrl(`/admin`)
  }

  Logout(){
    localStorage.removeItem("loginRole");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token-session");
    localStorage.removeItem("user-session-id");
    this.router.navigateByUrl(`/`);
  }

}
