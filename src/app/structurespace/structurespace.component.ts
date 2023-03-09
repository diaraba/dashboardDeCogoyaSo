import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from '../sevices/annonce/annonce.service';
import { AvisoffreService } from '../sevices/avisoffre/avisoffre.service';
import { StorageService } from '../sevices/storage/storage.service';
import { StructureService } from '../sevices/structure/structure.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-structurespace',
  templateUrl: './structurespace.component.html',
  styleUrls: ['./structurespace.component.scss']
})
export class StructurespaceComponent implements OnInit {

  idstructure:any;
  isSuccessful = false;
  isSignUpFailed = false;
  avisoffres:any;
  errorMessage = '';
  annonces:any;
  structures:any;
  response:any;
  constructor(private storageservice: StorageService ,private annonce:AnnonceService,private avisoffre:AvisoffreService,private route:ActivatedRoute,private structure:StructureService) { }


  ngOnInit(): void {
    // if (this.storageservice.isLoggedIn()) {
    //   this.idstructure = this.storageservice.getUser().id
    // }
    this.idstructure = this.route.snapshot.params["idstructure"];
    this.annonce.afficherallannonce(this.idstructure).subscribe({
      next: data => {
        this.annonces=data;
        console.log(this.annonces);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });

    this.avisoffre.afficherallavisoffre(this.idstructure).subscribe({
      next: data => {
        this.avisoffres=data;
        console.log(this.avisoffres);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });

    this.structure.afficherStructureparid(this.idstructure).subscribe(data => {
      this.structures = data;
      console.log(this.structures)
    })
  }

  delete(idavisoffre:any){
    console.log(idavisoffre+"responseresponseresponseresponseresponseresponse")

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


  delete1(idannonce:any){
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
