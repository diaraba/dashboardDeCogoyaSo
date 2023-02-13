import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../sevices/authservice/authentication.service';
import { LoginService } from '../sevices/login/login.service';
import { StorageService } from '../sevices/storage/storage.service';

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
        this.storageService.saveUser(data);

        this.isLoggedIn = this.storageService.isLoggedIn();
        if (this.isLoggedIn == true) {
          this.route.navigate(['/sidebar/dashboard']);
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  onResetpassword(form:any){
    
  }

}
