import { Component, OnInit } from '@angular/core';
import { StructureService } from '../sevices/structure/structure.service';
import { UtilisateurService } from '../sevices/utilisateur/utilisateur.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users:any
  utilisateurs:any;
  structures:any;
  nombreutilisateur:any;
  nombrestructure:any;
  response:any;
  responsive=true;
  responsive1=true;
  pagination:number=1;
  pagination1:number=1;
  constructor(private utilisateur:UtilisateurService,private structure:StructureService) { }

  ngOnInit(): void {

    this.utilisateur.afficherAllUtilisateur().subscribe(data => {
      this.utilisateurs = data;
      console.log(this.utilisateurs)
      this.nombreutilisateur=data.length
      console.log(this.nombreutilisateur)
    })

    this.structure.afficherAllStructureAllStatut().subscribe(data => {
      this.structures = data;
      this.nombrestructure=data.length;
      console.log(this.structures)
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
          this.ngOnInit()
        })
        
      }
    })
    
  }

}
