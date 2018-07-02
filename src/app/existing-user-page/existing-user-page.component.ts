import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { SharedService } from '../_services/shared.service';

@Component({
    selector: 'app-existing-user-page',
    templateUrl: './existing-user-page.component.html',
    styleUrls: ['./existing-user-page.component.scss']
})
export class ExistingUserPageComponent implements OnInit {
    private currentUserEmail: any = window.localStorage.currentUserEmail;
    private currentUser: any = {};
    public showDialogue = false;
    public emptyFieldsArray: any[] = [];
    public isVisible = false;

    constructor(private userService: UserService, private sharedService: SharedService) { }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe((res) => {
                const usersList = res;
                const filteredUsers = usersList.filter(user => {
                    if (user.email === this.currentUserEmail) {
                        return true;
                    }
                });
                this.currentUser = filteredUsers[0];

                this.currentUser.firstname = this.toTitleCase(this.currentUser.firstname);

                Object.keys(this.currentUser).forEach((key) => {
                    if (this.currentUser[key] === null || this.currentUser[key] === '') {
                        if (key === 'birthdate') {
                            this.emptyFieldsArray.push({name: key, label: this.toTitleCase(key), required: true, type: 'date'});
                        } else {
                            this.emptyFieldsArray.push({name: key, label: this.toTitleCase(key), required: true, type: 'text'});
                        }
                        this.showDialogue = true;
                    }
                });
            });


        this.sharedService.changeEmitted$.subscribe(
            form => {
                if (form) {
                    this.updateUser(form);
                }
            });
    }

    toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    updateUser(form) {
        const userToUpdate = Object.assign({email: this.currentUserEmail}, form);
        this.userService.updateUser(userToUpdate)
            .subscribe((res) => {
                if (res === 'success') {
                    this.isVisible = false;
                    this.showDialogue = false;
                    alert('Your data was successfully updated');
                } else {
                    alert('There was an error updating your data. Please try again');
                }
            });
    }

}
