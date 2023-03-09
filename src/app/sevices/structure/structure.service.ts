import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/';
const STRUCTUTRE_API='http://localhost:8080/api/profilestructure'
const STRUCTUREPARID_API = 'http://localhost:8080/api/utilisateur/';
const UTILISATEUR = 'http://localhost:8080/api/utilisateur/';



const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private http:HttpClient) { }
  creerprofilstructure(nom:any, slogan:any, numero:any, activite:any,localisation:any,description:any, idstructure:any, images:any): Observable<any>{
    let data = new FormData();
    data.append('nom',nom);
    data.append('slogan',slogan);
    data.append('numero',numero);
    data.append('activite', activite);
    console.log(localisation);
    console.log(images);
    console.log(idstructure+"  bbbbbbbbbbbbbbbbbbbbbbbbbb");
    data.append('localisation', localisation);
    console.log(localisation);
    data.append('description', description);
    console.log(images);
    data.append('image', images);
    console.log(images);


    return this.http.post(
      STRUCTUTRE_API + `/creerProfileStructure/${idstructure}`,data
    );
  }

  afficherprofil(id_structure:any):Observable<any>{
    return this.http.get(AUTH_API + `profilestructure/afficherprofil/${id_structure}`);
  }

  modifierCompteAllContent( 
    nom:any,
    slogan:any,
    numero:any,
    activite:any,
    localisation:any,
    description:any,
    image:any,
    iduser:any): Observable<any> {
  
    let data = new FormData();
    data.append('nom', nom);
    data.append('slogan',slogan);
    data.append('numero', numero);
    data.append('activite', activite);
    data.append('localisation', localisation);
    data.append('description', description); 
    data.append('image', image);
    console.log(image);
    return this.http.put(
     STRUCTUTRE_API + `/modifierProfileStructure/${iduser}`, data
    );
  }


  afficherAllStructureAllStatut():Observable<any>{
    return this.http.get('http://localhost:8080/api/utilisateur/afficherAllStructureAllStatut');
  }

  afficherStructureparid(idstructure:any):Observable<any>{
    return this.http.get(STRUCTUREPARID_API + `afficherStructureparid/${idstructure}`);
  }

  supprimeruser(iduser:any):Observable<any>{
    return this.http.delete(UTILISATEUR  + `supprimeruser/${iduser}`);
  }
}
