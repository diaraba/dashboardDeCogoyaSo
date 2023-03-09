import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../sevices/storage/storage.service';
import { StructureService } from '../sevices/structure/structure.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  idstructure: any;
  structures: any;
  description: any;
  profiles: any;
  slogan: any;
  showProfi=false;
  constructor(private route: ActivatedRoute, private structure: StructureService,private storageservice:StorageService) { }

  ngOnInit(): void {
    if(this.storageservice.isLoggedIn()){
      this.idstructure=this.storageservice.getUser().id
    }
    if (this.storageservice.isLoggedIn() && this.storageservice.getUser().roles.includes("ROLE_STRUCTURE")) {
      this.showProfi = true
    }
    this.structure.afficherStructureparid(this.idstructure).subscribe(data => {
      this.structures = data;
      console.log(this.structures)
    })


    this.structure.afficherprofil(this.idstructure).subscribe(data => {
      console.log(data);
      this.profiles = data
      this.description = this.profiles.description
      this.slogan = this.profiles.slogan


    })
  }

}
