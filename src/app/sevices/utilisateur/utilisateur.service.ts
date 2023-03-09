import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjetStructure } from 'src/app/modele/objet-structure';
const AUTH_API = 'http://localhost:8080/api/';
const UTILISATEUR_API='http://localhost:8080/api/profileutilisateurs'
const PASSWORD_API = 'http://localhost:8080/api/utilisateur/';


const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  creerprofilutilisateur(nom:any, prenom:any, genre:any, numero:any,situation:any,idutilisateur:any, images:any): Observable<any>{
    let data = new FormData();
    data.append('nom',nom);
    data.append('prenom',prenom);
    data.append('numero',numero);
    data.append('situation', situation);
    console.log(images);
    console.log(idutilisateur+"  bbbbbbbbbbbbbbbbbbbbbbbbbb");
    data.append('genre', genre);
    console.log(images);
    data.append('image', images);
    console.log(images);


    return this.http.post(
      UTILISATEUR_API + `/creerProfileUtilisateurs/${idutilisateur}`,data
    );
  }

  afficherprofilutilisateur(iduser:any):Observable<any>{
    return this.http.get(AUTH_API + `profileutilisateurs/afficherprofile/${iduser}`);
  }


  modifierProfil(nom: any, prenom: any, genre: any, numero: any, situation: any,images:any, iduser: any): Observable<any> {
    console.log(nom);
    console.log(images);
    console.log("bbbbbbbbbbbbbbbbb" +numero+"ddddddddddddddddddddddddddd")
    let data = new FormData();
    data.append('nom', nom);
    data.append('prenom', prenom);
    data.append('numero', numero);
    data.append('situation', situation);
    data.append('image', images);
    console.log(images);
    return this.http.put(
      UTILISATEUR_API + `/modifierProfileUtilisateur/${iduser}`, data
    );
  }

  afficherAllUtilisateur():Observable<any>{
    return this.http.get('http://localhost:8080/api/utilisateur/afficherAllUtilisateur');
  }
  afficherAllAbonnees(idstructure:any):Observable<any>{
    return this.http.get(AUTH_API + `auth/afficherabonner/${idstructure}`);
  }

  supprimerabonnee(iduser:any,idstructure:any):Observable<any>{
    return this.http.delete(AUTH_API  + `auth/desabonner/${iduser}/${idstructure}`);
  }

  modifierCompteAllContent(nomutilisateur: any, email: any,id_utilisateur: any): Observable<any> {
  
    // let data = new FormData();
    // data.append('activites', activites);
    return this.http.put(
      `http://localhost:8080/api/auth/modifierUtilisateur/${id_utilisateur}`, {nomutilisateur,email,}
    );
  }

  forgetpassword(email:string){
    console.log(email);
    let data = new FormData();
    data.append('email', email);
    console.log(data.getAll(email));
    return this.http.post(
      PASSWORD_API + 'changerMotDePasse',data
    );
  }

  updatepassword(currentpassword:any,newpassword:any, confirmpassword:any,email:any): Observable<any> {
    const data={
      "email":email,
      "currentpassword":currentpassword,
      "newpassword":newpassword, 
      "confirmpassword":confirmpassword
    }
    // let data = new FormData();
    // data.append('activites', activites);
    return this.http.post('http://localhost:8080/api/utilisateur/updateMotdepasse',data);
  }
}
