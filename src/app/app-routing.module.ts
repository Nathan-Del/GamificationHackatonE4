import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EleveAccueilComponent } from './eleve-accueil/eleve-accueil.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { GameSessionComponent } from './game-session/game-session.component';

const routes: Routes = [
  {path: '', component: GameSessionComponent},
  {path: 'eleve', component: EleveAccueilComponent},
  {path: 'admin', component: AdminAccueilComponent},
  //Redirection
  {path: '', pathMatch: 'full', redirectTo: '/' },
  {path: '**', pathMatch: 'full', redirectTo: '/'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
