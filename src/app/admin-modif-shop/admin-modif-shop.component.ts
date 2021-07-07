import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-admin-modif-shop',
  templateUrl: './admin-modif-shop.component.html',
  styleUrls: ['./admin-modif-shop.component.css']
})
export class AdminModifShopComponent implements OnInit {
  sessionValue: string = "";
  productID: string;
  product: any;

  //Form
  inputNameProduct: string;
  inputDescriptionProduct: string;
  inputPriceProduct: number;

  constructor(private dataService: DataService, private router: Router, private _router: Router, private _location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productID = this.route.snapshot.params.id;

    this.dataService.getProductbyId(this.productID).subscribe(
      (response: any) =>
      {
        console.log("ProductByID Response : ", response);
        this.product = response;
        this.inputNameProduct = this.product.name;
        this.inputDescriptionProduct = this.product.description;
        this.inputPriceProduct = this.product.price;
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

  ModifProduct(){
    var modifQuest = 
    {
      name: this.inputNameProduct,
      description: this.inputDescriptionProduct,
      price: this.inputPriceProduct
    }
    this.dataService.putProduct(this.productID, modifQuest).subscribe(
      (response: any) => 
      {
        console.log("Modif Product response : ", response);
      }
    )
  }

  AdminAccueil(){
    this.router.navigateByUrl(`/admin`)
  }

}
