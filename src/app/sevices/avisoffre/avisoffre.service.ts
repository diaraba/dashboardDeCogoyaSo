import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AVISOFFRE_API = 'http://localhost:8080/api/avisoffre/';


const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AvisoffreService {

  constructor(private http:HttpClient) { }


  ajouteravisoffre(titre:any, cible:any,conditions:any,typeOffre:any,description:any,idstructure:any, images:any): Observable<any>{
    let data = new FormData();
    data.append('titre',titre);
    data.append('cible',cible);
    data.append('conditions',conditions);
    data.append('typeOffre',typeOffre);
    data.append('description',description);

    console.log(images);
    console.log(idstructure+"  bbbbbbbbbbbbbbbbbbbbbbbbbb");
    console.log(images);
    data.append('image', images);
    console.log(images);


    return this.http.post(
      AVISOFFRE_API + `creerAvisoffre/${idstructure}`,data
    );
  }


  modifieravisoffre(titre:any, cible:any,conditions:any,typeOffre:any,description:any,idstructure:any,idavisoffre:any, images:any): Observable<any>{
    let data = new FormData();
    data.append('titre',titre);
    data.append('cible',cible);
    data.append('conditions',conditions);
    data.append('typeOffre',typeOffre);
    data.append('description',description);

    console.log(images);
    console.log(idstructure+"  bbbbbbbbbbbbbbbbbbbbbbbbbb");
    console.log(images);
    data.append('image', images);
    console.log(titre);
    console.log(cible);
    console.log(conditions);
    console.log(description);
    console.log(typeOffre);


    return this.http.put(
      AVISOFFRE_API + `modifierAvisOffre/${idavisoffre}/${idstructure}`,data
    );
  }


  
  afficherallavisoffre(idstructure:any):Observable<any>{
    return this.http.get(AVISOFFRE_API + `afficheravisparidstructure/${idstructure}`);
  }

  afficheravisoffreid(idavisoffre:any):Observable<any>{
    return this.http.get(AVISOFFRE_API + `afficheravisoffreparid/${idavisoffre}`);
  }
  
  affichertypeoffres():Observable<any>{
    return this.http.get(AVISOFFRE_API + 'afficheravisoffreparid');
  }
  
  supprimeravisOffre(idavisoffre:any):Observable<any>{
    return this.http.delete(AVISOFFRE_API  + `supprimeravisOffre/${idavisoffre}`);
  }
}
