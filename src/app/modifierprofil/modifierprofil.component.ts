import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../sevices/storage/storage.service';
import { StructureService } from '../sevices/structure/structure.service';

@Component({
  selector: 'app-modifierprofil',
  templateUrl: './modifierprofil.component.html',
  styleUrls: ['./modifierprofil.component.scss']
})
export class ModifierprofilComponent implements OnInit {
  showadminboard = false;
  idstructure: any;
  iduser: any
  profiles: any;
  profilesuser: any;
  content: any;
  idprofile: any;
  roles: any;
  isLoggedIn = false;
  description: any;
  status: any;
  image:any
  numero: any;
  slogan: any;
  email: any;
  nom: any;
  activite: any;
  showupdateprofile = false;
  activites:any=[];
  role:any;
  statut:any;

  images:any;
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
  constructor(private storageservice: StorageService, private structure: StructureService) { }

  ngOnInit(): void {
    if (this.storageservice.isLoggedIn()) {

      this.iduser = this.storageservice.getUser().id
      this.idstructure = this.storageservice.getUser().id
    }
    this.structure.afficherprofil(this.idstructure).subscribe(data => {
      console.log(data);
      this.profiles = data
      this.description = this.profiles.description
      this.status = this.profiles.structure.statuts[0]
      this.numero = this.profiles.numero
      this.slogan = this.profiles.slogan
      this.activite = this.profiles.activite
      this.email = this.profiles.structure.email
      this.nom = this.profiles.nom
      this.image=this.profiles.image
      console.log(this.nom)

      if (this.roles[0] == "ROLE_STRUCTURE") {
        this.showupdateprofile = true;
      }

      console.log(this.profiles);
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
      if(nom==null){
        this.form.nom=" ";
      }
      if(slogan==null){
        this.form.slogan=" ";
      }
      if(numero==null){
        this.form.numero=" ";
      }
      if(activite==null||activite==undefined){
        this.form.activite=" ";
      }
      if(description==null){
        this.form.description=" ";
      }
      if(localisation==null){
        this.form.localisation=" ";
      }
    this.structure.modifierCompteAllContent( 
      this.form.nom,
      this.form.slogan,
      this.form.numero,
      this.form.activite,
      this.form.localisation,
      this.form.description ,this.images ,this.iduser).subscribe(data=>{
      this.content=data
      console.log(this.content);
      location.reload();
    })
  }
  chargeImage(event: any){
    this.images = event.target["files"][0]
    console.log(this.images);
  }

}
