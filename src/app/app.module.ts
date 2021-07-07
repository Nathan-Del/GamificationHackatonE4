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
import { AdminAddQuestComponent } from './admin-add-quest/admin-add-quest.component';
import { AdminModifQuestComponent } from './admin-modif-quest/admin-modif-quest.component';
import { AdminShopComponent } from './admin-shop/admin-shop.component';
import { AdminModifShopComponent } from './admin-modif-shop/admin-modif-shop.component';
import { AdminUserQuestsComponent } from './admin-user-quests/admin-user-quests.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSessionComponent,
    EleveAccueilComponent,
    AdminAccueilComponent,
    EleveShopComponent,
    AdminAddQuestComponent,
    AdminModifQuestComponent,
    AdminShopComponent,
    AdminModifShopComponent,
    AdminUserQuestsComponent
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
