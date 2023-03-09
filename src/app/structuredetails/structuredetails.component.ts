import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StructureService } from '../sevices/structure/structure.service';

@Component({
  selector: 'app-structuredetails',
  templateUrl: './structuredetails.component.html',
  styleUrls: ['./structuredetails.component.scss']
})
export class StructuredetailsComponent implements OnInit {
idstructure:any;
structures:any;
description: any;
profiles: any;
slogan: any;
image:any;

public host = environment.host;
public picture = `${this.host}image/`
  constructor(private route:ActivatedRoute,private structure:StructureService) { }

  ngOnInit(): void {
    this.idstructure = this.route.snapshot.params["idstructure"];
    this.structure.afficherStructureparid(this.idstructure).subscribe(data => {
      this.structures = data;
      console.log(this.structures)
    })


    this.structure.afficherprofil(this.idstructure).subscribe(data => {
      console.log(data);
      this.profiles = data
      this.description = this.profiles.description
      this.slogan = this.profiles.slogan
      this.image=this.profiles.image;
      
      
    })
  }

}
