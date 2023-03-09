import { Component, OnInit } from '@angular/core';
import { AvisoffreService } from '../sevices/avisoffre/avisoffre.service';
import { StorageService } from '../sevices/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-avisoffre',
  templateUrl: './avisoffre.component.html',
  styleUrls: ['./avisoffre.component.scss']
})
export class AvisoffreComponent implements OnInit {

  idstructure: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  avisoffres: any;
  taille: any;
  avistype: any;
  response: any;

  responsive = true;
  pagination: number = 1;
  constructor(private storageservice: StorageService, private avisoffre: AvisoffreService) { }

  ngOnInit(): void {
    if (this.storageservice.isLoggedIn()) {
      this.idstructure = this.storageservice.getUser().id
    }

    this.avisoffre.afficherallavisoffre(this.idstructure).subscribe({
      next: data => {
        this.avisoffres = data;
        this.taille = this.avisoffres.length;
        console.log(this.avisoffres);
        console.log(this.avisoffres[0].idavisoffre)
        console.log(this.avisoffres[0].typeOffre)
        console.log(this.avisoffres[0].typeOffre.nom)
        for (let i = 0; i < this.avisoffres.length; i++) {
          console.log(this.avisoffres[i].typeOffre.nom)
          if (this.avisoffres[i].typeOffre.nom.includes("RECRUITEMENT")) {
            this.isSuccessful = true;
           
            this.avistype = "RECRUITEMENT";
            console.log(this.avisoffres[i].typeOffre.nom)
          }
          else{
            this.avistype = "FINANCEMENT";
            this.isSignUpFailed = true;
            this.avisoffres
            console.log(this.avisoffres[i].typeOffre.nom)
          }
        }

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  delete(idavisoffre: any) {
    console.log(idavisoffre + "responseresponseresponseresponseresponseresponse")

    Swal.fire({
      title: ' Êtes vous sûr?',
      text: "Cette action est irréversible !?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer le!'
    }).then((result) => {

      if (result.isConfirmed) {

        this.avisoffre.supprimeravisOffre(idavisoffre).subscribe(data => {
          this.response = data;
          console.log(this.response)
          Swal.fire(
            'Deleted!',
            'L\'utilisateur a été supprimer avec succès.',
            'success'
          )
          this.ngOnInit()
        })

      }
    })

  }

}
