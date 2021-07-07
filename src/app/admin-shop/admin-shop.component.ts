import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-admin-shop',
  templateUrl: './admin-shop.component.html',
  styleUrls: ['./admin-shop.component.css']
})
export class AdminShopComponent implements OnInit {
  sessionValue: string = "";
  products: any;

  //Form
  inputNameProduct: string;
  inputDescriptionProduct: string;
  inputPriceProduct: number;

  constructor(private dataService: DataService, private router: Router, private _router: Router, private _location: Location) { }

  ngOnInit(): void {
    this.sessionValue = localStorage.getItem("isLogin");
    if(this.sessionValue == "true")
    {
      
    }
    else{
      this.router.navigateByUrl(`/`);
    }

    this.dataService.getProducts().subscribe(
      (response: any) =>
      {
        console.log("All Products Response : ",  response);
        this.products = response;
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

  DeleteProduct(id: number){
    this.dataService.deleteProduct(id).subscribe(
      (response: any) =>
      {
        console.log("Delete Product response : ", response);
      }
    )
    this.reloadPage();
  }

  CreateProduct(){
    var newProduct = 
    {
      name: this.inputNameProduct,
      description: this.inputDescriptionProduct,
      price: this.inputPriceProduct
    }
    this.dataService.postProduct(newProduct).subscribe(
      (response: any) =>
      {
        console.log("Create product response : ", response);
      }
    )
    this.reloadPage();
  }

  ModifProduct(id){
    this.router.navigateByUrl(`/admin/modifShop/${id}`);
  }

  AccueilAdmin(){
    this.router.navigateByUrl(`/admin`);
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
