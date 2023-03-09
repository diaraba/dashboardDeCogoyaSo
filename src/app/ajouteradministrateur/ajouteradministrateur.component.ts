import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../sevices/authservice/authentication.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouteradministrateur',
  templateUrl: './ajouteradministrateur.component.html',
  styleUrls: ['./ajouteradministrateur.component.scss']
})
export class AjouteradministrateurComponent implements OnInit {

  activites: any = [];
  nom!: String;
  allactivites: any = [];
  activite: any;
  roles: any = [];
  role:any;
  statut: any = [];
  // objetStructure: ObjetStructure = new ObjetStructure();

  images: any;
  form: any = {
    nomutilisateur: null,
    email: null,
    password: null,
  };
  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit(): void {
    // this.authService.afficherallactivites().subscribe(data => {
    //   this.allactivites = data
    //   console.log(this.allactivites);
    // })


  }
  onactiviteSelected(activite: any) {
    if (!this.activites.includes(activite)) {
      this.activites.push(activite);
    } else {
      this.activites.splice(this.activites.indexOf(activite), 1);
    }
    console.log(this.activites);
  }

  onSubmit(): void {

    const {
      nomutilisateur,
      email,
      password,
    } = this.form;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Création de la structure en cours de traitement !',
      showConfirmButton: false,
      timer: 1500
    })
    this.roles.push(this.role);
    console.log(this.roles)
    this.authService.registerAdmin(email, nomutilisateur, password, this.roles).subscribe({
      next: data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Structure créer avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          setTimeout(() => {
            // location.reload();
            this.route.navigate(['/sidebar/admin'])
          }, 2000);
        });
        console.log(data);

      },
      error: err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Le mail n\'a pas puis être envoyé, mais la structure a été ajouter avec succès !',
        }).then(() => {
          setTimeout(() => {
            // location.reload();
            this.route.navigate(['/sidebar/admin'])
          }, 2000);
        });
      }
    });

  }

  chargeImage(event: any) {
    this.images = event.target["files"][0]
    console.log(this.images);
  }

}
