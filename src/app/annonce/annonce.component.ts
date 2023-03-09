import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../sevices/annonce/annonce.service';
import { StorageService } from '../sevices/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {
  idstructure:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  annonces:any;
  taille:any;
  response:any
  
  responsive=true;
  pagination:number=1;
  constructor(private storageservice: StorageService ,private annonce:AnnonceService) { }

  ngOnInit(): void {
    if (this.storageservice.isLoggedIn()) {
      this.idstructure = this.storageservice.getUser().id
    }

    this.annonce.afficherallannonce(this.idstructure).subscribe({
      next: data => {
        this.annonces=data;
        this.taille=this.annonces.length
        console.log(this.annonces);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  delete(idannonce:any){
    console.log(idannonce+"responseresponseresponseresponseresponseresponse")

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

        this.annonce.supprimerannonce(idannonce).subscribe(data => {
          this.response = data;
          console.log(this.response)
          Swal.fire(
            'Deleted!',
            'Annonce supprimer avec succès.',
            'success'
          )
          this.ngOnInit()
        })
        
      }
    })
    
  }

}
