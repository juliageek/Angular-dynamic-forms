import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }
    getUsers(): Observable<any> {
        const url = 'http://dynamic-forms.iuliamihet.com/PHP/getUsers.php';
        return this.http.get(url);
    }

    createUser(user): Observable<any> {
        const url = 'http://dynamic-forms.iuliamihet.com/PHP/createUser.php';
        return this.http.post(url, user);
    }

    updateUser(user): Observable<any> {
        const url = 'http://dynamic-forms.iuliamihet.com/PHP/updateUser.php';
        return this.http.post(url, user);
    }
}
