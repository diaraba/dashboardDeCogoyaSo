import { Component, ViewChild } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';
// import { BreakpointObserver } from '@angular/cdk/layout';
// import { delay, filter } from 'rxjs/operators';
// import { NavigationEnd, Router } from '@angular/router';
// import { StorageService } from './sevices/storage/storage.service';
// import { AuthenticationService } from './sevices/authservice/authentication.service';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

//@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // title = 'dashboardCogoyaSo';
  // @ViewChild(MatSidenav)
  // sidenav!: MatSidenav;
  // private roles: string[] = [];
  // isLoggedIn1 = true;
  // showAdminBoard = false;
  // showStructureBoard = false;
  // router: any;

  constructor() { }
  ngOnInit(): void {
    //   console.log(this.isLoggedIn1)

    //     //this.isLoggedIn=this.storageService.isLoggedIn();


    //   if (this.storageService.isLoggedIn()) {
    //     const user = this.storageService.getUser();
    //     this.roles = user.roles;
    //     this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    //     this.showStructureBoard = this.roles.includes('ROLE_STRUCTURE');
    //     this.isLoggedIn1=false
    //   }
    // }


    // logout(): void {
    //   this.authService.logout().subscribe({
    //     next: res => {
    //       console.log(res);
    //       this.storageService.clean();

    //       window.location.reload();
    //     },
    //     error: err => {
    //       console.log(err);
    //     }
    //   });
    // }

    // ngAfterViewInit() {
    //   this.observer
    //     .observe(['(max-width: 800px)'])
    //     .pipe(delay(1), untilDestroyed(this))
    //     .subscribe((res) => {
    //       if (res.matches) {
    //         this.sidenav.mode = 'over';
    //         this.sidenav.close();
    //       } else {
    //         this.sidenav.mode = 'side';
    //         this.sidenav.open();
    //       }
    //     });

    //   this.router.events
    //     .pipe(
    //       untilDestroyed(this),
    //       filter((e) => e instanceof NavigationEnd)
    //     )
    //     .subscribe(() => {
    //       if (this.sidenav.mode === 'over') {
    //         this.sidenav.close();
    //       }
    //     });
  }


}
