import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../sevices/storage/storage.service';
import { UtilisateurService } from '../sevices/utilisateur/utilisateur.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifierprofiladmin',
  templateUrl: './modifierprofiladmin.component.html',
  styleUrls: ['./modifierprofiladmin.component.scss']
})
export class ModifierprofiladminComponent implements OnInit {
  showadminboard = false;
  idstructure: any;
  iduser: any
  profilesuser: any;
  content: any;
  idprofile: any;
  roles: any;
  isLoggedIn = false;
  numero: any;
  email: any;
  nom: any;
  image: any;
  showupdateprofile = false;
  role:any;
  statut:any;
  payload:any;

  images:any;
  form: any = {
    nom: null,
    prenom: null,
    genre: null,
    numero: null,
    
    situation: null,
  };

  
  public host = environment.host;
  public picture = `${this.host}image/`
  constructor(private storageservice: StorageService, private route: Router, private utilisateur: UtilisateurService) { }

  ngOnInit(): void {
    if (this.storageservice.isLoggedIn()) {

      this.iduser = this.storageservice.getUser().id
      this.idstructure = this.storageservice.getUser().id
    }
    this.utilisateur.afficherprofilutilisateur(this.iduser).subscribe(data => {
      console.log(data
        );
      this.profilesuser = data
      this.content = this.profilesuser.utilisateurs
      console.log(this.profilesuser.utilisateurs)
      this.idprofile = this.content.iduser;

      
    })
  }
  // onInterestSelected(interest: any) {
  //   if (!this.activites.includes(interest)) {
  //     this.activites.push(interest);
  //   } else {
  //     this.activites.splice(this.activites.indexOf(interest), 1);
  //   }
  //   console.log(this.activites);
  // }
  onSubmit(): void {
    const { 
      nom,
      prenom,
      genre,
      numero,
      situation} = this.form;
      console.log(this.form);
      console.log("bbbbbbbbbbbbbbbbb" +numero+"ddddddddddddddddddddddddddd")
      
      if(numero==null){
        this.form.numero=" ";
      }
      if(nom==null){
        this.form.nom=" ";
      }
      if(prenom==null){
        this.form.prenom=" ";
      }
      if(genre==null){
        this.form.genre=" ";
      }
      if(situation==null){
        this.form.situation=" ";
      }

      
      console.log("bbbbbbbbbbbbbbbbb" + this.form.numero+"ddddddddddddddddddddddddddd")
      console.log(this.images);

      this.utilisateur.modifierProfil( this.form.nom, this.form.prenom, this.form.genre,this.form.numero, this.form.situation,this.images,this.iduser).subscribe(data=>{
      this.payload=data
      console.log(this.payload);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Profil modifier avec succès',
        showConfirmButton: false,
        timer: 1500
      })
       
        setTimeout(() => {
          // location.reload();
          this.route.navigate(['/sidebar/profil'])
        }, 2000);
     
      // location.reload();
    })

    // this.modifprofil.modifierCompte( this.activites, this.id_utilisateur).subscribe(data=>{
    //   this.payload=data
    //   console.log(this.payload);
    // })
  }

  chargeImage(event: any){
    this.images = event.target["files"][0]
    console.log(this.images);
  }
}
