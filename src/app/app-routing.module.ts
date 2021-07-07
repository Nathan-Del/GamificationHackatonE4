import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EleveAccueilComponent } from './eleve-accueil/eleve-accueil.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { GameSessionComponent } from './game-session/game-session.component';
import { AdminAddQuestComponent } from './admin-add-quest/admin-add-quest.component';
import { AdminModifQuestComponent } from './admin-modif-quest/admin-modif-quest.component';
import { EleveShopComponent } from './eleve-shop/eleve-shop.component';
import { AdminShopComponent } from './admin-shop/admin-shop.component';
import { AdminModifShopComponent } from './admin-modif-shop/admin-modif-shop.component';
import { AdminUserQuestsComponent } from './admin-user-quests/admin-user-quests.component';

const routes: Routes = [
  {path: '', component: GameSessionComponent},
  {path: 'eleve', component: EleveAccueilComponent},
  {path: 'admin', component: AdminAccueilComponent},
  {path: 'admin/addQuest', component: AdminAddQuestComponent},
  {path: 'admin/modifQuest/:id', component: AdminModifQuestComponent},
  {path: 'eleve/shop', component: EleveShopComponent},
  {path: 'admin/shop', component: AdminShopComponent},
  {path: 'admin/modifShop/:id', component: AdminModifShopComponent},
  {path: 'admin/userQuest', component: AdminUserQuestsComponent},
  //Redirection
  {path: '', pathMatch: 'full', redirectTo: '/' },
  {path: '**', pathMatch: 'full', redirectTo: '/'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
