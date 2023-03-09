import { Component, OnInit } from '@angular/core';
import { AvisoffreService } from '../sevices/avisoffre/avisoffre.service';
import { StorageService } from '../sevices/storage/storage.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouteravisoffre',
  templateUrl: './ajouteravisoffre.component.html',
  styleUrls: ['./ajouteravisoffre.component.scss']
})
export class AjouteravisoffreComponent implements OnInit {

  role: any;
  statut: any;
  idstructure: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  images: any;
  form: any = {
    titre: null,
    cible: null,
    description: null,
    conditions:null,
    typeOffre:null,
  };
  constructor(private storageservice: StorageService, private avisoffre: AvisoffreService,private route:Router) { }

  ngOnInit(): void {
    if (this.storageservice.isLoggedIn()) {
      this.idstructure = this.storageservice.getUser().id
    }

  }
  
  onSubmit(): void {

    const {
      titre,
      cible,
      conditions,
      description,
      typeOffre
    } = this.form;

    // console.log(nomutilisateur);
    // console.log(password);

    console.log(this.images);
    // alert(this.form.password);
    // alert(this.form.nomutilisateur);
    // alert(this.form.email);
    this.avisoffre.ajouteravisoffre(titre, cible,conditions ,typeOffre,description, this.idstructure, this.images).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Avis offre créer avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          setTimeout(() => {
            // location.reload();
            this.route.navigate(['/sidebar/avisoffre'])
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
