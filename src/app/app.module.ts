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
import { AjouterprofilComponent } from './ajouterprofil/ajouterprofil.component';
import { ModifierprofilComponent } from './modifierprofil/modifierprofil.component';
import { ModifiercompteComponent } from './modifiercompte/modifiercompte.component';
import { ModifiercompteadminComponent } from './modifiercompteadmin/modifiercompteadmin.component';
import { AjouterprofiladminComponent } from './ajouterprofiladmin/ajouterprofiladmin.component';
import { ModifierprofiladminComponent } from './modifierprofiladmin/modifierprofiladmin.component';
import { AjouterannonceComponent } from './ajouterannonce/ajouterannonce.component';
import { AjouteravisoffreComponent } from './ajouteravisoffre/ajouteravisoffre.component';
import { ModifierstructureComponent } from './modifierstructure/modifierstructure.component';
import { StructurespaceComponent } from './structurespace/structurespace.component';
import { UtilisateurdetailsComponent } from './utilisateurdetails/utilisateurdetails.component';
import { ModifierannonceComponent } from './modifierannonce/modifierannonce.component';
import { ModifieravisoffreComponent } from './modifieravisoffre/modifieravisoffre.component';
import { AbonneeComponent } from './abonnee/abonnee.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AjouteradministrateurComponent } from './ajouteradministrateur/ajouteradministrateur.component';
import { NgxPaginationModule } from 'ngx-pagination';


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
    AjouterprofilComponent,
    ModifierprofilComponent,
    ModifiercompteComponent,
    ModifiercompteadminComponent,
    AjouterprofiladminComponent,
    ModifierprofiladminComponent,
    AjouterannonceComponent,
    AjouteravisoffreComponent,
    ModifierstructureComponent,
    StructurespaceComponent,
    UtilisateurdetailsComponent,
    ModifierannonceComponent,
    ModifieravisoffreComponent,
    AbonneeComponent,
    AdministrateurComponent,
    AjouteradministrateurComponent,

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
    SidebarRoutingModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
