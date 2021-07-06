import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-accueil',
  templateUrl: './admin-accueil.component.html',
  styleUrls: ['./admin-accueil.component.css']
})
export class AdminAccueilComponent implements OnInit {
  sessionValue: string = "";
  quests: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.sessionValue = sessionStorage.getItem("isLogin");
    if(this.sessionValue != "true")
    {
      this.router.navigateByUrl(`/`);
    }

    this.dataService.getQuest().subscribe(
      (response: any) => 
      {
        console.log("Response : " + response);
        this.quests.push(response);
      }
    )
  }

  Logout(){
    sessionStorage.removeItem("isLogin");
    this.router.navigateByUrl(`/`);
  }

  AddQuest(){
    this.router.navigateByUrl(`/manageQuest`)
  }

  ModifQuest(id: number){
    this.router.navigateByUrl(`/manageQuest/${id}`)
  }

  DeleteQuest(id: number){
    this.dataService.deleteQuest(id).subscribe(
      (response: any) =>
      {
        console.log("Delete Quest : " + response);
      }
    )
  }

}
