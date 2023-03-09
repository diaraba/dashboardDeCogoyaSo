import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from '../sevices/storage/storage.service';
import { StructureService } from '../sevices/structure/structure.service';

@Component({
  selector: 'app-profildetails',
  templateUrl: './profildetails.component.html',
  styleUrls: ['./profildetails.component.scss']
})
export class ProfildetailsComponent implements OnInit {
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
  numero: any;
  slogan: any;
  email: any;
  nom: any;
  image: any;
  activite: any;
  structures:any;
  
  public host = environment.host;
  public picture = `${this.host}image/`
  constructor(private route:ActivatedRoute,private structure: StructureService,private storageservice:StorageService) { }

  ngOnInit(): void {
    if(this.storageservice.isLoggedIn()&&this.storageservice.getUser().roles.includes("ROLE_STRUCTURE")){
      this.idstructure=this.storageservice.getUser().id
    }else{
      this.idstructure = this.route.snapshot.params["idstruct"];
      console.log(this.idstructure);
    }
    console.log(this.idstructure);
    this.structure.afficherStructureparid(this.idstructure).subscribe(data => {
      this.structures = data;
      console.log(this.structures)
    })


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
    })
  }

}
