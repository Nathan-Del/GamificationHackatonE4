import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GameSessionComponent } from './game-session/game-session.component';
import { AppRoutingModule } from './app-routing.module';
import { EleveAccueilComponent } from './eleve-accueil/eleve-accueil.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { EleveShopComponent } from './eleve-shop/eleve-shop.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameSessionComponent,
    EleveAccueilComponent,
    AdminAccueilComponent,
    EleveShopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
