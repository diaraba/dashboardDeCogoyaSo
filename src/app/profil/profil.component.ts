import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from '../sevices/storage/storage.service';
import { StructureService } from '../sevices/structure/structure.service';
import { UtilisateurService } from '../sevices/utilisateur/utilisateur.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  showadminboard = false;
  idstructure: any;
  iduser: any
  profiles: any;
  profilesuser: any;
  content: any;
  idprofile: any;
  roles: any;
  isLoggedIn = false;
  description: any;
  status: any;
  numero: any;
  slogan: any;
  email: any;
  nom: any;
  image: any;
  activite: any;
  showupdateprofile = false;
  showAddprofile = false;
  showAddprofileadmin = false;
  public host = environment.host;
  public picture = `${this.host}image/`
  constructor(private storageservice: StorageService, private structure: StructureService, private utilisateur: UtilisateurService, private route: Router) {

  }

  ngOnInit(): void {
    if (this.storageservice.isLoggedIn()) {

      this.iduser = this.storageservice.getUser().id
      this.idstructure = this.storageservice.getUser().id
      this.roles = this.storageservice.getUser().roles[0]
      console.log(this.roles);
    }
    this.structure.afficherprofil(this.idstructure).subscribe(data => {
      console.log(data);
      this.profiles = data
      if (this.profiles == null || this.profiles == undefined) {
        this.showAddprofile = true;
      }

      this.description = this.profiles.description
      this.status = this.profiles.structure.statuts[0]
      this.numero = this.profiles.numero
      this.image = this.profiles.image
      this.slogan = this.profiles.slogan
      this.activite = this.profiles.activite
      this.email = this.profiles.structure.email
      this.nom = this.profiles.nom

      if (this.roles == "ROLE_STRUCTURE") {
        this.showupdateprofile = true;
      }

      console.log(this.profiles);

      console.log(this.showupdateprofile);
    })

    this.utilisateur.afficherprofilutilisateur(this.iduser).subscribe(data => {
      console.log(data);
      this.profilesuser = data;

      this.image = this.profilesuser.image;
      this.content = this.profilesuser.utilisateurs
      console.log(this.profilesuser.utilisateurs)

      this.idprofile = this.content.iduser;

    })
  }


  redirectTo(profil: any): void {
    this.utilisateur.afficherprofilutilisateur(profil).subscribe(data => {
      console.log(data);
      this.profilesuser = data;
      console.log(this.profilesuser)
      if (this.profilesuser != null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vous avez déjà créer un profil !',
        })
      }else{
        this.route.navigate(['/sidebar/ajouterprofiladmin']);
      }
    })
  }


  redirectToStructure(profil: any): void {
    this.structure.afficherprofil(profil).subscribe(data => {
      console.log(data);
      this.profilesuser = data;
      console.log(this.profilesuser)
      if (this.profilesuser != null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vous avez déjà créer un profil !',
        })
      }else{
        this.route.navigate(['/sidebar/ajouterprofil']);
      }
    })
  }


  // this.utilisateur.(this.iduser).subscribe(data => {
  //   this.profiles = data
  //   this.content = this.profiles.utilisateurs
  //   this.idprofile = this.content.iduser;

  //   console.log(this.profiles);
  // })




}
