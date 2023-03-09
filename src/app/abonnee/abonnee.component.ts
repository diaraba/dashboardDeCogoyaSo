import { Component, OnInit } from '@angular/core';
import { StorageService } from '../sevices/storage/storage.service';
import { UtilisateurService } from '../sevices/utilisateur/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-abonnee',
  templateUrl: './abonnee.component.html',
  styleUrls: ['./abonnee.component.scss']
})
export class AbonneeComponent implements OnInit {
  utilisateurs: any;
  utilisateurwithroleemploi: any = [];
  taille: any;
  idstructure: any;
  abonnement: any;
  response:any;
  responsive=true;
  pagination:number=1;
  constructor(private storageservice: StorageService, private utilisateur: UtilisateurService) { }

  ngOnInit(): void {

    if (this.storageservice.isLoggedIn()) {
      this.idstructure = this.storageservice.getUser().id
    }
  
    this.utilisateur.afficherAllAbonnees(this.idstructure).subscribe(data => {
      this.abonnement = data;
      // this.utilisateurs =  this.abonnement[0].utilisateurs;
      for (let utilisateurioption of this.abonnement) {

        this.utilisateurwithroleemploi.push(utilisateurioption.utilisateurs);
      }
      //this.utilisateurwithroleemploi.push(this.utilisateurs);
      console.log(this.utilisateurs)
      this.taille = this.utilisateurwithroleemploi.length;
      console.log(this.utilisateurwithroleemploi);
    })
  }
   delete(iduser:any){
    console.log(iduser+"responseresponseresponseresponseresponseresponse")

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

        this.utilisateur.supprimerabonnee(iduser,this.idstructure).subscribe(data => {
          this.response = data;
          console.log(this.response)
          Swal.fire(
            'Deleted!',
            'L\'utilisateur a été supprimer de vos abonnées avec succès.',
            'success'
          )
              location.reload();
            })
        
      }
    })
    
  }


}
