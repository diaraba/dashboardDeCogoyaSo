import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjetStructure } from 'src/app/modele/objet-structure';

const AUTH_API = 'http://localhost:8080/api/auth/';
const PASSWORD_API = 'http://localhost:8080/api/utilisateur/';


const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  register( images:any, activites:any,statut:any,role:any, alias:any, email:any, password:any): Observable<any>{
    let data = new FormData();
    console.log(activites)
    const objet=[
    {
    "email":email,
    "alias":alias,
    "password":password, 
    "role":[role],
    "statut":[statut],
    "activites": activites
    }
    ]
    data.append('objet', JSON.stringify(objet).slice(1,JSON.stringify(objet).lastIndexOf(']')));
    console.log(images);
    data.append('photodecouverture',images);
    //let activitesString = JSON.stringify(activites);
   
    return this.http.post(
      AUTH_API + `creerStructure`,data
    );
  }


  registerAdmin(email:any,nomutilisateur:any,password:any,roles:any): Observable<any>{ 
    console.log(roles +" authservices")
    return this.http.post(
      AUTH_API + `creerUtilisateur`,
      {
        "nomutilisateur":nomutilisateur,
        "email":email,
        "password":password,
        "role":roles
      }
    );
  }


  login(email:string, password:string): Observable<any>{
    console.log(email);
    console.log(password);
    return this.http.post(
      AUTH_API + 'signin',
      {
        email,
        password,
      },
      httpOptions
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

  logout(): Observable<any> {
    // return this.http.post(
    //   AUTH_API + 'logout',{},httpOptions
    //   );
    const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
    return this.http.request(req);
  }
  afficherallactivites():Observable<any>{
    return this.http.get(PASSWORD_API + 'afficherpreference');
  }
}
