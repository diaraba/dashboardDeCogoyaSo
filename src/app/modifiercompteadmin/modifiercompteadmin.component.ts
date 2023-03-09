import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObjetStructure } from '../modele/objet-structure';
import { StorageService } from '../sevices/storage/storage.service';
import { UtilisateurService } from '../sevices/utilisateur/utilisateur.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-modifiercompteadmin',
  templateUrl: './modifiercompteadmin.component.html',
  styleUrls: ['./modifiercompteadmin.component.scss']
})
export class ModifiercompteadminComponent implements OnInit {

  objet: any = {
    email: null,
    currentpassword: null,
    newpassword: null,
    confirmpassword: null,
  };


  activites: any = [];
  // objet:any;
  role: any;
  statut: any;
  isForgetpass = false;

  images: any;
  form: any = {
    nomutilisateur: null,
    email: null,
  };

  content: any;
  idutilisateur: any;
  private subscriptions: Subscription[] = [];

  constructor(private utilisateur: UtilisateurService, private route: Router, private storageservice: StorageService) {



  }

  ngOnInit(): void {
    if (this.storageservice.isLoggedIn()) {

      this.idutilisateur = this.storageservice.getUser().id
    }
  }
  onSubmit(): void {
    const { nomutilisateur, email } = this.form;

    this.utilisateur.modifierCompteAllContent(nomutilisateur, email, this.idutilisateur).subscribe(data => {
      this.content = data
      console.log(this.content);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compte modifier avec succès !',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        // location.reload();
        this.route.navigate(['/sidebar/profil'])
      }, 2000);
      //location.reload();
    })
  }
  chargeImage(event: any) {
    this.images = event.target["files"][0]
    console.log(this.images);
  }

  ModifierMotdepasse(): void {
    // const {email, currentpassword, newpassword, confirmpassword } = this.objet;
    console.log(this.objet);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Changement du mot de passe en cours de traitement !',
      showConfirmButton: false,
    })
    this.utilisateur.updatepassword(this.objet.currentpassword, this.objet.newpassword, this.objet.confirmpassword, this.objet.email).subscribe(data => {
      this.content = data
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mot de passe changer avec succès',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(this.content)
    })
  }


  // onResetpassword(passwordchange:ObjetStructure): void {
  //   console.log(passwordchange);
  // const email: string = form.emails;
  // this.subscriptions.push(
  //   this.utilisateur.updatepassword(passwordchange).subscribe(
  //     response => {
  //       console.log(response);
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: 'Your work has been saved',
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  //     },
  //    error => {
  //     console.log(error);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Something went wrong!',
  //         footer: '<a href="">Why do I have this issue?</a>'
  //       })
  //     }
  //   )
  // );
  // }
}
