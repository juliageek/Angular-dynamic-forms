import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
    }

    userLogin(user): Observable<any> {
        const url = 'http://dynamic-forms.iuliamihet.com/PHP/login.php';
        return this.http.post(url, user);
    }
}