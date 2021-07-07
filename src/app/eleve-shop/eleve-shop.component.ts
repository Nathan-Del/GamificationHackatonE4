import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-eleve-shop',
  templateUrl: './eleve-shop.component.html',
  styleUrls: ['./eleve-shop.component.css']
})
export class EleveShopComponent implements OnInit {
  sessionValue: string = "";
  products: any;
  userID: number;
  userCoins: string;
  //User Info
  tokenSession: string = "";
  userIDsession: string = "";
  User: any;

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


    //GET ALL PRODUCTS
    this.dataService.getProducts().subscribe(
      (response: any) => 
      {
        console.log("Products response : " + response);
        this.products = response;
      }
    )

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
  }


  Logout(){
    localStorage.removeItem("loginRole");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token-session");
    localStorage.removeItem("user-session-id");
    this.router.navigateByUrl(`/`);
  }

  AccueilEleve(){
    this.router.navigateByUrl(`/eleve`);
  }

  BuyProduct(price: number){
    var eleveCoins = this.User.credits;
    if( eleveCoins >= price)
    {
      eleveCoins = eleveCoins - price;
      var coins = { credits: eleveCoins }
      this.dataService.putUser(this.User._id, coins, this.tokenSession).subscribe(
        (response: any) =>
        {
          console.log("Buy Product response : ", response);
          this.reloadPage();
        }
      )
    }
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
