import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisoffreService } from '../sevices/avisoffre/avisoffre.service';
import { StorageService } from '../sevices/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifieravisoffre',
  templateUrl: './modifieravisoffre.component.html',
  styleUrls: ['./modifieravisoffre.component.scss']
})
export class ModifieravisoffreComponent implements OnInit {

  idavisoffre:any;
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
  constructor(private storageservice: StorageService, private avisoffre: AvisoffreService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idavisoffre = this.route.snapshot.params["idavisoffre"];

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

    console.log(titre);
    console.log(conditions);

    console.log(this.images);
    // alert(this.form.password);
    // alert(this.form.nomutilisateur);
    // alert(this.form.email);


       
if(titre==null){
  this.form.titre=" ";
}
if(description==null){
  this.form.description=" ";
}
if(conditions==null){
  this.form.conditions=" ";
} 
if(cible==null){
  this.form.cible=" ";
}
if(typeOffre==null){
  this.form.typeOffre=" ";
}
    this.avisoffre.modifieravisoffre(this.form.titre, this.form.cible, this.form.conditions ,this.form.typeOffre,this.form.description, this.idstructure, this.idavisoffre, this.images).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Avis offre modifier avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          setTimeout(() => {
            // location.reload();
            this.router.navigate(['/sidebar/avisoffre'])
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
