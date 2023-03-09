import { Component, OnInit } from '@angular/core';
import { StorageService } from '../sevices/storage/storage.service';
import { StructureService } from '../sevices/structure/structure.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ajouterprofil',
  templateUrl: './ajouterprofil.component.html',
  styleUrls: ['./ajouterprofil.component.scss']
})
export class AjouterprofilComponent implements OnInit {

  activites: any = [];
  role: any;
  structures: any
  statut: any;
  idstructure: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  images: any;
  form: any = {
    nom: null,
    slogan: null,
    numero: null,
    activite: null,
    localisation: null,
    description: null,
  };

  
  public host = environment.host;
  public picture = `${this.host}image/`
  constructor(private storageservice: StorageService, private structure: StructureService, private route: Router) { }

  ngOnInit(): void {
    if (this.storageservice.isLoggedIn()) {
      // this.idstructure = this.storageservice.getUser().id
    }
    this.structure.afficherAllStructureAllStatut().subscribe(data => {
      this.structures = data;
      console.log(this.structures)
    })

  }
  onInterestSelected(interest: any) {
    if (!this.activites.includes(interest)) {
      this.activites.push(interest);
    } else {
      this.activites.splice(this.activites.indexOf(interest), 1);
    }
    console.log(this.activites);
  }
  onSubmit(): void {

    const {
      nom,
      slogan,
      numero,
      activite,
      localisation,
      description } = this.form;

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
    console.log(this.idstructure + " idstructureidstructureidstructureidstructureidstructureidstructure")
    this.structure.creerprofilstructure(nom, slogan, numero, activite, localisation, description, this.idstructure, this.images).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Profil créer avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          setTimeout(() => {
            // location.reload();
            this.route.navigate(['/sidebar/structure'])
          }, 1700);
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
