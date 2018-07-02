import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { SharedService } from '../_services/shared.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
    //TODO implement toastr notifications all over the app
    private myForm: FormGroup;
    private username: AbstractControl;
    private password: AbstractControl;
    private alertVisible = false;
    private formAlertVisible = false;
    private passwordAlertVisible = false;

    constructor(private router: Router, private loginService: AuthService, private sharedService: SharedService, private fb: FormBuilder) {
        this.myForm = fb.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
        this.username = this.myForm.controls['username'];
        this.password = this.myForm.controls['password'];
    }

    ngOnInit() {
    }

    login(form) {
        if (form.valid) {
            this.alertVisible = false;
            this.formAlertVisible = false;
            this.passwordAlertVisible = false;
            this.loginService.userLogin(form.value)
                .subscribe((res) => {
                    if (res.status === 'logged in') {
                        localStorage.setItem('currentUser', res.username);
                        localStorage.setItem('currentUserEmail', res.email);
                        this.router.navigate(['/existing-user']);
                        this.sharedService.emitChange('User is logged in');
                    } else if (res.status === 'wrong password') {
                        form.password = '';
                        this.passwordAlertVisible = true;
                    } else if (res.status === 'unknown username') {
                        this.alertVisible = true;
                    } else {
                        this.formAlertVisible = true;
                    }
                });
        }
    }

    signUpRedirect() {
        if (this.alertVisible === true || this.formAlertVisible === true || this.passwordAlertVisible === true) {
            this.alertVisible = false;
            this.formAlertVisible = false;
            this.passwordAlertVisible = false;
        }
        if (this.myForm.value.username !== '' || this.myForm.value.password !== '') {
            this.myForm.reset();
        }
        this.router.navigate(['/new-user']);
    }
}
