import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, AbstractControl, ValidatorFn } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-new-user-form',
    templateUrl: './new-user-form.component.html',
    styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {
    public newUserForm: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService) {
        this.newUserForm = new FormGroup({
            firstname: new FormControl ('', [<any>Validators.required]),
            lastname: new FormControl ('', [<any>Validators.required]),
            email: new FormControl ('', [<any>Validators.required, <any>Validators.email]),
            phone: new FormControl ('',[<any>Validators.required, Validators.minLength(13), Validators.maxLength(14), this.phoneNumberValidator(/(^(\+|00)([0-9]){2}([0-9]){9,10})/)]),
            birthdate: new FormControl ('', [<any>Validators.required, Validators.maxLength(10)]),
            company: new FormControl ('', [<any>Validators.required]),
            location: new FormControl ('', [<any>Validators.required]),
            username: new FormControl ('', [<any>Validators.required]),
            password: new FormControl ('', [<any>Validators.required])
        });
    }

    phoneNumberValidator(nameRe: RegExp): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            const isNotValid = !nameRe.test(control.value);
            return isNotValid ? {'invalidPhone': {value: control.value}} : null;
        };
    }

    ngOnInit() {}

    createUser (form, isValid: boolean) {
        if (isValid === true) {
            Object.keys(this.newUserForm.controls).forEach(field => {
                const control = this.newUserForm.get(field);
                control.markAsPristine({ onlySelf: true });
            });
            this.newUserForm.reset();
            this.userService.createUser(form)
                .subscribe ((res) => {
                    if (res === 'success') {
                        alert('The user was successfully created');
                    } else if (res === 'exists') {
                        alert('There is an existing user with this email address');
                    } else {
                        alert('There was an error creating your profile. Please try again later.');
                    }
                });
        } else {
            Object.keys(this.newUserForm.controls).forEach(field => {
                const control = this.newUserForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    }

}
