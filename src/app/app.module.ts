import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ProfilComponent } from './profil/profil.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { SupermarketComponent } from './supermarket/supermarket.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    AuthentificationComponent,
    ProfilComponent,
    AdoptionComponent,
    SupermarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
