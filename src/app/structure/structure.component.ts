import { Component, OnInit } from '@angular/core';
import { StructureService } from '../sevices/structure/structure.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {
  structures:any;
  taille:any;
  response:any;
  responsive=true;
  pagination:number=1;
  constructor(private structure:StructureService) { }

  ngOnInit(): void {
    this.structure.afficherAllStructureAllStatut().subscribe(data => {
      this.structures = data;
      this.taille=data.length
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
