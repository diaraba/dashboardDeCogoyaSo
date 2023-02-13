import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouterstructure',
  templateUrl: './ajouterstructure.component.html',
  styleUrls: ['./ajouterstructure.component.scss']
})
export class AjouterstructureComponent implements OnInit {
  activites:any=[];
  role:any;
  statut:any;

  images:any;
  form: any = {
    nom: null,
    prenom: null,
    genre: null,
    numero: null,
    
    situation: null,
  };
  constructor() { }

  ngOnInit(): void {
  }
  onInterestSelected(interest: any) {
    if (!this.activites.includes(interest)) {
      this.activites.push(interest);
    } else {
      this.activites.splice(this.activites.indexOf(interest), 1);
    }
    console.log(this.activites);
  }
  onSubmit(){

  }

  chargeImage(event: any){
    this.images = event.target["files"][0]
    console.log(this.images);
  }
}
