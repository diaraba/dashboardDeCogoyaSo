import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../sevices/annonce/annonce.service';
import { StorageService } from '../sevices/storage/storage.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterannonce',
  templateUrl: './ajouterannonce.component.html',
  styleUrls: ['./ajouterannonce.component.scss']
})
export class AjouterannonceComponent implements OnInit {


  role: any;
  statut: any;
  idstructure: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  images: any;
  form: any = {
    titre: null,
    objet: null,
    contenu: null
  };
  constructor(private storageservice: StorageService, private annonce: AnnonceService, private route:Router) { }

  ngOnInit(): void {
    if (this.storageservice.isLoggedIn()) {
      this.idstructure = this.storageservice.getUser().id
    }

  }

  onSubmit(): void {

    const {
      titre,
      objet,
      contenu,
    } = this.form;

    // console.log(nomutilisateur);
    // console.log(password);

    console.log(this.images);
    // alert(this.form.password);
    // alert(this.form.nomutilisateur);
    // alert(this.form.email);
    this.annonce.ajouterannonce(titre, objet, contenu, this.idstructure, this.images).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Annonce créer avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          setTimeout(() => {
            // location.reload();
            this.route.navigate(['/sidebar/annonce'])
          }, 1550);
        });
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });

  }

  chargeImage(event: any) {
    this.images = event.target["files"][0]
    console.log(this.images);
  }

}
