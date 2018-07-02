import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './_services/shared.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private isLoggedIn: boolean;

    constructor(private router: Router, private sharedService: SharedService) {
        sharedService.changeEmitted$.subscribe(
            text => {
                if (text === 'User is logged in') {
                    this.isLoggedIn = true;
                }
            });
    }

    ngOnInit() {
        if (window.localStorage.currentUser) {
            this.isLoggedIn = true;
        }
    }

    userLogOut() {
        localStorage.clear();
        this.isLoggedIn = false;
        this.router.navigate(['home']);
    }

}
