import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../sevices/authservice/authentication.service';
import { LoginService } from '../sevices/login/login.service';
import { StorageService } from '../sevices/storage/storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  isForgetpass = false;
  errorMessage = '';
  constructor(private storageService: StorageService, private route: Router, private authservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password } = this.form;

    console.log(email);
    console.log(password);

    console.log(email);
    alert(this.form.password);
    this.authservice.login(email, password,).subscribe({
      next: data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Connexion reussi !',
          showConfirmButton: false,
          timer: 1500
        })
        this.storageService.saveUser(data);
        console.log(data+"tokentokentokentokentokentokentokentokentokentokentokentokentokentoken")
        this.isLoggedIn = this.storageService.isLoggedIn();
        if (this.isLoggedIn == true && this.storageService.getUser().roles.includes("ROLE_ADMIN")) {
          this.route.navigate(['/sidebar/dashboard']);
        }else{
          this.route.navigate(['/sidebar/accueil']);
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  onResetpassword(form:any){
    console.log(form.emails)
    const email: string = form.emails;

    this.authservice.forgetpassword(email).subscribe({
      next:data=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Mot de passe changer avec succès!',
          text: "Veuillez consulter votre boîte mail !",
          showConfirmButton: false,
        })
      }
    });
  }

}
