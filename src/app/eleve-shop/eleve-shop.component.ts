import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleve-shop',
  templateUrl: './eleve-shop.component.html',
  styleUrls: ['./eleve-shop.component.css']
})
export class EleveShopComponent implements OnInit {
  sessionValue: string = "";
  products: any[] = [];
  userID: number;
  userCoins: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.sessionValue = sessionStorage.getItem("isLogin");
    if(this.sessionValue != "true")
    {
      this.router.navigateByUrl(`/`);
    }

    // //GET ALL PRODUCTS
    // this.dataService.getProducts().subscribe(
    //   (response: any) => 
    //   {
    //     console.log("Products response : " + response);
    //     this.products.push(response);
    //   }
    // )

  //   //GET USER COINS
  //   this.dataService.getUser(this.userID).subscribe(
  //     (response: any) => 
  //     {
  //       console.log("User response : " + response);
  //       this.userCoins = response.coins;
  //     }
  //   )
  // }

  // BuyProduct(price: number){
  //   var eleveCoins = Number(this.userCoins);
  //   if( eleveCoins >= price)
  //   {
  //     eleveCoins = eleveCoins - price;
  //     var coins = { coins : String(eleveCoins) }
  //     this.dataService.putUser(this.userID, coins).subscribe(
  //       (response: any) =>
  //       {
  //         console.log("Buy Product response : " + response);
  //       }
  //     )
  //   }
  }

}
