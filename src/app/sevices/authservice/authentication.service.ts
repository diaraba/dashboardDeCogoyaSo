import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  register(nomutilisateur:string, email:string, password:string, activites:any,roles:any): Observable<any>{
    let data = new FormData();
    data.append('nomutilisateur',nomutilisateur);
    data.append('email',email);
    //let activitesString = JSON.stringify(activites);
    data.append('password',password);
    data.append('activites', activites);
    console.log(roles);
    data.append('role', roles);
    console.log(roles);
    return this.http.post(
      AUTH_API + `creerUtilisateur`,
      {
        "nomutilisateur":nomutilisateur,
        "email":email,
        "password":password,
        "activites":activites,
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
}
