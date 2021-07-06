import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleve-accueil',
  templateUrl: './eleve-accueil.component.html',
  styleUrls: ['./eleve-accueil.component.css']
})
export class EleveAccueilComponent implements OnInit {
  sessionValue: string = "";
  quests: any[] = [];
  userID: number;
  userCoins: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.sessionValue = sessionStorage.getItem("isLogin");
    if(this.sessionValue != "true")
    {
      this.router.navigateByUrl(`/`);
    }

    //GET ALL QUEST
    this.dataService.getQuest().subscribe(
      (response: any) => 
      {
        console.log("Response : " + response);
        this.quests.push(response);
      }
    )

    //GET USER COINS
    // this.dataService.getUser(this.userID).subscribe(
    //   (response: any) => 
    //   {
    //     console.log("User response : " + response);
    //     this.userCoins = response.coins;
    //   }
    // )

  }

  Logout(){
    sessionStorage.removeItem("isLogin");
    this.router.navigateByUrl(`/`);
  }

  // const body = { title: 'Angular PUT Request Example' };
  //   this.http.put<Article>('https://jsonplaceholder.typicode.com/posts/1', body)

  AcceptQuest(id: number){
    const statusQuest = { status: 'En cours'};
    this.dataService.putQuest(id, statusQuest).subscribe(
      (response: any) =>
      {
        console.log("Accept Quest : " + response);
      }
    )
  }

}
