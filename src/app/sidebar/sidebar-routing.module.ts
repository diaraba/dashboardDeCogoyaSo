import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AbonneeComponent } from "../abonnee/abonnee.component";
import { AccueilComponent } from "../accueil/accueil.component";
import { AdministrateurComponent } from "../administrateur/administrateur.component";
import { AjouteradministrateurComponent } from "../ajouteradministrateur/ajouteradministrateur.component";
import { AjouterannonceComponent } from "../ajouterannonce/ajouterannonce.component";
import { AjouteravisoffreComponent } from "../ajouteravisoffre/ajouteravisoffre.component";
import { AjouterprofilComponent } from "../ajouterprofil/ajouterprofil.component";
import { AjouterprofiladminComponent } from "../ajouterprofiladmin/ajouterprofiladmin.component";
import { AjouterstructureComponent } from "../ajouterstructure/ajouterstructure.component";
import { AnnonceComponent } from "../annonce/annonce.component";
import { AnnoncedetailsComponent } from "../annoncedetails/annoncedetails.component";
import { AvisoffreComponent } from "../avisoffre/avisoffre.component";
import { AvisoffredetailsComponent } from "../avisoffredetails/avisoffredetails.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { EmploiComponent } from "../emploi/emploi.component";
import { ModifierannonceComponent } from "../modifierannonce/modifierannonce.component";
import { ModifieravisoffreComponent } from "../modifieravisoffre/modifieravisoffre.component";
import { ModifiercompteadminComponent } from "../modifiercompteadmin/modifiercompteadmin.component";
import { ModifierprofilComponent } from "../modifierprofil/modifierprofil.component";
import { ModifierprofiladminComponent } from "../modifierprofiladmin/modifierprofiladmin.component";
import { ProfilComponent } from "../profil/profil.component";
import { ProfildetailsComponent } from "../profildetails/profildetails.component";
import { ProjetComponent } from "../projet/projet.component";
import { StructureComponent } from "../structure/structure.component";
import { StructuredetailsComponent } from "../structuredetails/structuredetails.component";
import { StructurespaceComponent } from "../structurespace/structurespace.component";
import { UtilisateurdetailsComponent } from "../utilisateurdetails/utilisateurdetails.component";
import { SidebarComponent } from "./sidebar.component";


const routes: Routes =[
    {
        path: 'sidebar', component:SidebarComponent,
        children:[
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
              },
            {
                path:'dashboard', component:DashboardComponent
            },
            {
                path:'structure', component:StructureComponent,
                
            },
            {
                path:'ajouterstrcuture', component:AjouterstructureComponent 
            },
            {
                path:'emploi', component:EmploiComponent
            },
            {
                path:'projet', component:ProjetComponent
            },
            {
                path:'profil', component:ProfilComponent 
            },
            {
                path:'structuredetails/:idstructure', component:StructuredetailsComponent 
            },

            {
                path:'profildetails/:idstruct', component:ProfildetailsComponent 
            },
            {
                path:'accueil', component:AccueilComponent 
            },

            {
                path:'abonnee', component:AbonneeComponent 
            },
            {
                path:'admin', component:AdministrateurComponent 
            },
            {
                path:'ajouteradministrateur', component:AjouteradministrateurComponent 
            },
            {
                path:'avisoffre', component:AvisoffreComponent 
            },
            {
                path:'avisoffredetails/:idavisoffre', component:AvisoffredetailsComponent 
            },
            {
                path:'modifieravisoffre/:idavisoffre', component:ModifieravisoffreComponent 
            },
            {
                path:'annonce', component:AnnonceComponent 
            },
            {
                path:'modifierannonce/:idannonce', component:ModifierannonceComponent 
            },
            
            {
                path:'annoncedetails/:idannonce', component:AnnoncedetailsComponent 
            },
            {
                path:'ajouterprofil', component:AjouterprofilComponent 
            },
            {
                path:'modifierprofil', component:ModifierprofilComponent 
            },
            {
                path:'modifiercompteadmin', component:ModifiercompteadminComponent 
            },
            {
                path:'modifierprofiladmin', component:ModifierprofiladminComponent 
            },
          
            {
                path:'ajouterprofiladmin', component:AjouterprofiladminComponent 
            },
            
            {
                path:'ajouterannonce', component:AjouterannonceComponent 
            },

            {
                path:'ajouteravisoffre', component:AjouteravisoffreComponent 
            },

            {
                path:'ajouterstructure', component:AjouterstructureComponent
            },
            {
                path:'structurespace/:idstructure', component:StructurespaceComponent
            },

            {
                path:'utilisateurdetails/:idutilisateur', component:UtilisateurdetailsComponent
            },
            // {
            //     path:'', redirectTo:'dashboard', pathMatch: 'full'
            // }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class SidebarRoutingModule {
}
