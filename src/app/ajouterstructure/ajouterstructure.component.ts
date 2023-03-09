import { Component, OnInit } from '@angular/core';
import { ObjetStructure } from '../modele/objet-structure';
import { AuthenticationService } from '../sevices/authservice/authentication.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterstructure',
  templateUrl: './ajouterstructure.component.html',
  styleUrls: ['./ajouterstructure.component.scss']
})
export class AjouterstructureComponent implements OnInit {
  activites: any = [];
  nom!: String;
  allactivites: any = [];
  activite: any;
  role: any = [];
  statut: any = [];
  objetStructure: ObjetStructure = new ObjetStructure();

  images: any;
  form: any = {
    alias: null,
    email: null,
    password: null,
  };
  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit(): void {
    this.authService.afficherallactivites().subscribe(data => {
      this.allactivites = data
      console.log(this.allactivites);
    })


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
      alias,
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

    this.authService.register(this.images, this.activites, this.statut, this.role, alias, email, password)
      .subscribe({
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
              this.route.navigate(['/sidebar/structure'])
            }, 2000);
          });
          console.log(data);
          // if (res.message == "Structure registered successfully!") {

          // } else {
          //   console.log("erreur");
          // }
        },
        error: err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Le mail n\'a pas puis être envoyé, mais la structure a été ajouter avec succès !',
          }).then(() => {
            setTimeout(() => {
              // location.reload();
              this.route.navigate(['/sidebar/structure'])
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
