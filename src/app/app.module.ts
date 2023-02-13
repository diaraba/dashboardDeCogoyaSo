import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructureComponent } from './structure/structure.component';
import { EmploiComponent } from './emploi/emploi.component';
import { ProjetComponent } from './projet/projet.component';
import { ProfilComponent } from './profil/profil.component';
import { SidebarRoutingModule } from './sidebar/sidebar-routing.module';
import { StructuredetailsComponent } from './structuredetails/structuredetails.component';
import { ProfildetailsComponent } from './profildetails/profildetails.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AvisoffreComponent } from './avisoffre/avisoffre.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnoncedetailsComponent } from './annoncedetails/annoncedetails.component';
import { AvisoffredetailsComponent } from './avisoffredetails/avisoffredetails.component';
import { AjouterstructureComponent } from './ajouterstructure/ajouterstructure.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    RegisterComponent,
    SidebarComponent,
    DashboardComponent,
    StructureComponent,
    EmploiComponent,
    ProjetComponent,
    ProfilComponent,
    StructuredetailsComponent,
    ProfildetailsComponent,
    AccueilComponent,
    AvisoffreComponent,
    AnnonceComponent,
    AnnoncedetailsComponent,
    AvisoffredetailsComponent,
    AjouterstructureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    SidebarRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
