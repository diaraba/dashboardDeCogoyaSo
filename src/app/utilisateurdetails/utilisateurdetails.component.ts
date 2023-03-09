import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UtilisateurService } from '../sevices/utilisateur/utilisateur.service';


@Component({
  selector: 'app-utilisateurdetails',
  templateUrl: './utilisateurdetails.component.html',
  styleUrls: ['./utilisateurdetails.component.scss']
})
export class UtilisateurdetailsComponent implements OnInit {
  idutilisateur: any;
  profilesuser: any;
  content: any;
  situation: any;
  nom: any;
  prenom: any;
  genre: any;
  etat: any;
  email: any;
  image: any;
  numero: any;
  etats: any;
  
  public host = environment.host;
  public picture = `${this.host}image/`
  constructor(private route: ActivatedRoute, private utilisateur: UtilisateurService) { }

  ngOnInit(): void {
    this.idutilisateur = this.route.snapshot.params["idutilisateur"];
    this.utilisateur.afficherprofilutilisateur(this.idutilisateur).subscribe(data => {
      console.log(data
      );
      this.profilesuser = data
      this.situation = this.profilesuser.situation;
      this.nom = this.profilesuser.nom;
      this.prenom = this.profilesuser.prenom;
      this.genre = this.profilesuser.genre;
      this.etat = this.profilesuser.etat;
      this.numero = this.profilesuser.numero;
      this.image=this.profilesuser.image;

      this.content = this.profilesuser.utilisateurs
      if (this.etat == "true") {
        this.etats = "Actif"
      }else{
        this.etats = "inactif"

      }
      this.email = this.content.email;
      console.log(this.profilesuser.utilisateurs)


    })
  }

}
