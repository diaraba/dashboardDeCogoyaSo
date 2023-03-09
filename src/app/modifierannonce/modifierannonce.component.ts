import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from '../sevices/annonce/annonce.service';
import { StorageService } from '../sevices/storage/storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modifierannonce',
  templateUrl: './modifierannonce.component.html',
  styleUrls: ['./modifierannonce.component.scss']
})
export class ModifierannonceComponent implements OnInit {
  
  idannonce:any;
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
  constructor(private storageservice: StorageService, private annonce: AnnonceService,private route:ActivatedRoute, private router:Router) { }


  ngOnInit(): void {
    this.idannonce = this.route.snapshot.params["idannonce"];

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

    
if(titre==null){
  this.form.titre=" ";
}
if(contenu==null){
  this.form.contenu=" ";
}
if(objet==null){
  this.form.objet=" ";
}

    this.annonce.modifierannonce(this.form.titre, this.form.objet, this.form.contenu, this.idannonce, this.idstructure,this.images).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Annonce modifier avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          setTimeout(() => {
            // location.reload();
            this.router.navigate(['/sidebar/annonce'])
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
