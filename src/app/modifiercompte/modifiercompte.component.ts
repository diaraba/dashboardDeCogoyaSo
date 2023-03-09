import { Component, OnInit } from '@angular/core';
import { StorageService } from '../sevices/storage/storage.service';
import { UtilisateurService } from '../sevices/utilisateur/utilisateur.service';

@Component({
  selector: 'app-modifiercompte',
  templateUrl: './modifiercompte.component.html',
  styleUrls: ['./modifiercompte.component.scss']
})
export class ModifiercompteComponent implements OnInit {
  form: any = {
    nomutilisateur: null,
    email:null,
  };
  content:any;
  idutilisateur:any;
  constructor(private utilisateur:UtilisateurService,private storageservice: StorageService) { }

  ngOnInit(): void { 
    if (this.storageservice.isLoggedIn()) {

      this.idutilisateur = this.storageservice.getUser().id
    }
   }
  onSubmit(): void {
    const {nomutilisateur, email} = this.form;

    this.utilisateur.modifierCompteAllContent(nomutilisateur, email, this.idutilisateur).subscribe(data=>{
      this.content=data
      console.log(this.content);
      location.reload();
    })
  }
}
