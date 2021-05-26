import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {environment as env} from '../../environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,

  ) { }

  fetchUsers() {
=======
import { environment as env } from '../../environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUser() {
>>>>>>> de4da1b25b07de3c6e8eb2d628ba220b73bb3258
    return this.http.get<UserModel[]>(`${env.baseURL}/users`);
  }
}
