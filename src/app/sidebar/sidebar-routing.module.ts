import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "../accueil/accueil.component";
import { AjouterstructureComponent } from "../ajouterstructure/ajouterstructure.component";
import { AnnonceComponent } from "../annonce/annonce.component";
import { AnnoncedetailsComponent } from "../annoncedetails/annoncedetails.component";
import { AvisoffreComponent } from "../avisoffre/avisoffre.component";
import { AvisoffredetailsComponent } from "../avisoffredetails/avisoffredetails.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { EmploiComponent } from "../emploi/emploi.component";
import { ProfilComponent } from "../profil/profil.component";
import { ProfildetailsComponent } from "../profildetails/profildetails.component";
import { ProjetComponent } from "../projet/projet.component";
import { StructureComponent } from "../structure/structure.component";
import { StructuredetailsComponent } from "../structuredetails/structuredetails.component";
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
                path:'structuredetails', component:StructuredetailsComponent 
            },

            {
                path:'profildetails', component:ProfildetailsComponent 
            },
            {
                path:'accueil', component:AccueilComponent 
            },

            {
                path:'avisoffre', component:AvisoffreComponent 
            },
            {
                path:'avisoffredetails', component:AvisoffredetailsComponent 
            },
            {
                path:'annonce', component:AnnonceComponent 
            },
            {
                path:'annoncedetails', component:AnnoncedetailsComponent 
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
