import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../sevices/utilisateur/utilisateur.service';
import Swal from 'sweetalert2'
import { StructureService } from '../sevices/structure/structure.service';
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  utilisateurs:any;
  utilisateurwithroleemploi: any = [];
  taille:any;
  response:any;
  
  responsive=true;
  pagination:number=1;
  constructor(private utilisateur:UtilisateurService, private structure:StructureService) { }

  ngOnInit(): void {
    this.utilisateur.afficherAllUtilisateur().subscribe(data => {
      this.utilisateurs = data;
    
      console.log(this.utilisateurs)
      for (let utilisateurioption of this.utilisateurs) {
        if (utilisateurioption.roles[0].name == "ROLE_PROJET") {
          this.utilisateurwithroleemploi.push(utilisateurioption);
        }
      }
        this.taille=this.utilisateurwithroleemploi.length;
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

        this.structure.supprimeruser(iduser).subscribe(data => {
          this.response = data;
          console.log(this.response)
          Swal.fire(
            'Deleted!',
            'L\'utilisateur a été supprimer avec succès.',
            'success'
          )
          // this.ngOnInit()
          setTimeout(() => {
            location.reload();
          }, 2000);
        })
        
      }
    })
    
  }

}
