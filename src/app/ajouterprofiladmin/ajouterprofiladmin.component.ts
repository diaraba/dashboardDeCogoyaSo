import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../sevices/storage/storage.service';
import { UtilisateurService } from '../sevices/utilisateur/utilisateur.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterprofiladmin',
  templateUrl: './ajouterprofiladmin.component.html',
  styleUrls: ['./ajouterprofiladmin.component.scss']
})
export class AjouterprofiladminComponent implements OnInit {

  activites:any=[];
  role:any;
  statut:any;
  idutilisateur:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
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
  constructor(private storageservice: StorageService, private route: Router, private utilisateur: UtilisateurService ) { }

  ngOnInit(): void {
    if (this.storageservice.isLoggedIn()) {
      this.idutilisateur = this.storageservice.getUser().id
    }

  }
  onInterestSelected(interest: any) {
    if (!this.activites.includes(interest)) {
      this.activites.push(interest);
    } else {
      this.activites.splice(this.activites.indexOf(interest), 1);
    }
    console.log(this.activites);
  }
  onSubmit(){

    const {nom, prenom, genre, numero,situation} = this.form;

    // console.log(nomutilisateur);
    // console.log(password);

    console.log(this.images);
    // alert(this.form.password);
    // alert(this.form.nomutilisateur);
    // alert(this.form.email);
    if(this.images==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Vous n\'avez pas choisi d\'image !',
        position:'center'
      })
    }
    this.utilisateur.creerprofilutilisateur(nom, prenom, genre, numero,situation, this.idutilisateur, this.images).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
     
        this.route.navigate(['/sidebar/profil']).then(() => {
          setTimeout(() => {
            // location.reload();
          }, 1);
        });
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  chargeImage(event: any){
    this.images = event.target["files"][0]
    console.log(this.images);
  }


}
