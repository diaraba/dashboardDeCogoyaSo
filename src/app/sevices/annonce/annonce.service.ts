import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const ANNONCE_API = 'http://localhost:8080/api/annonce/';


const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }


  ajouterannonce(titre:any, objet:any, contenu:any,idstructure:any, images:any): Observable<any>{
    let data = new FormData();
    data.append('titre',titre);
    data.append('objet',objet);
    data.append('contenu',contenu);
    console.log(images);
    console.log(idstructure+"  bbbbbbbbbbbbbbbbbbbbbbbbbb");
    console.log(images);
    data.append('image', images);
    console.log(images);


    return this.http.post(
      ANNONCE_API + `creerAnnonce/${idstructure}`,data
    );
  }

  modifierannonce(titre:any, objet:any, contenu:any,idannonce:any, idstructure:any,images:any): Observable<any>{
    let data = new FormData();
    data.append('titre',titre);
    data.append('objet',objet);
    data.append('contenu',contenu);
    console.log(images);
    console.log(idstructure+"  bbbbbbbbbbbbbbbbbbbbbbbbbb");
    console.log(images);
    data.append('image', images);
    console.log(images);


    return this.http.put(
      ANNONCE_API + `modifierAnnonce/${idstructure}/${idannonce}`,data
    );
  }
  
  afficherallannonce(idstructure:any):Observable<any>{
    return this.http.get(ANNONCE_API + `afficherannonceparidstructure/${idstructure}`);
  }
  

  afficherannonceparid(idannonce:any):Observable<any>{
    return this.http.get(ANNONCE_API + `afficherannonceparid/${idannonce}`);
  }

  supprimerannonce(idannonce:any):Observable<any>{
    return this.http.delete(ANNONCE_API  + `supprimerannonce/${idannonce}`);
  }
}
