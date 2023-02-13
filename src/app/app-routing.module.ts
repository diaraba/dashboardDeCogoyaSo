import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfildetailsComponent } from './profildetails/profildetails.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StructuredetailsComponent } from './structuredetails/structuredetails.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  //{ path: 'register', component: RegisterComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  {
    path:'structuredetails', component:StructuredetailsComponent 
},

{
    path:'profildetails', component:ProfildetailsComponent 
},
  {
    path:'sidebar',loadChildren: () => import('./sidebar/sidebar.module').then((m)=>m.SidebarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
