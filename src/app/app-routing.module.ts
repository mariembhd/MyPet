import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionComponent } from './adoption/adoption.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ProfilComponent } from './profil/profil.component';
import { SupermarketComponent } from './supermarket/supermarket.component';

const routes: Routes = [
  {path:"authentification",component:AuthentificationComponent},
  {path:"profil",component:ProfilComponent},
  {path:"adoption",component:AdoptionComponent},
  {path:"supermarket",component:SupermarketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
