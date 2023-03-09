import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AvisoffreService } from '../sevices/avisoffre/avisoffre.service';

@Component({
  selector: 'app-avisoffredetails',
  templateUrl: './avisoffredetails.component.html',
  styleUrls: ['./avisoffredetails.component.scss']
})
export class AvisoffredetailsComponent implements OnInit {
  idavisoffre:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  avisoffres:any;
  description:any;
  date:any;
  cible:any;
  titre:any;
  image:any;
  public host = environment.host;
  public picture = `${this.host}image/`
  constructor(private route:ActivatedRoute,private avisoffre:AvisoffreService) { }

  ngOnInit(): void {
    this.idavisoffre = this.route.snapshot.params["idavisoffre"];
    this.avisoffre.afficheravisoffreid(this.idavisoffre).subscribe({
      next: data => {
        this.avisoffres=data;
        this.description=this.avisoffres.description;
        this.cible=this.avisoffres.cible;
        this.date=this.avisoffres.date;
        this.titre=this.avisoffres.titre;
        this.image=this.avisoffres.image;
        console.log(this.avisoffres);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
