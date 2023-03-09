import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AnnonceService } from '../sevices/annonce/annonce.service';

@Component({
  selector: 'app-annoncedetails',
  templateUrl: './annoncedetails.component.html',
  styleUrls: ['./annoncedetails.component.scss']
})
export class AnnoncedetailsComponent implements OnInit {
  idannonce:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  avisoffres:any;
  description:any;
  date:any;
  objet:any;
  titre:any;
  
  public host = environment.host;
  public picture = `${this.host}image/`
  constructor(private route:ActivatedRoute,private annonce:AnnonceService) { }

  ngOnInit(): void {
    this.idannonce = this.route.snapshot.params["idannonce"];
    this.annonce.afficherannonceparid(this.idannonce).subscribe({
      next: data => {
        this.avisoffres=data;
        this.description=this.avisoffres.contenu;
        this.objet=this.avisoffres.objet;
        this.date=this.avisoffres.date;
        this.titre=this.avisoffres.titre;
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
