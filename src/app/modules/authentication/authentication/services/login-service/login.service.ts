import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../../shared/models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    public loginWithCredentials(user: UserModel): Observable<any> {
        return this.http.post<any>('https://cyberwe.herokuapp.com/authenticate', user).pipe(
            map(
                userData => {
                    return userData;
                }
            )
        );
    }
}