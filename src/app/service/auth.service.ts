import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:3000/users';

  getAll() {
    return this.http.get<any>(this.API)
  }
  getByCode(code: any) {
    return this.http.get(this.API + '/' + code)
  }

  isLogin() {
    return sessionStorage.getItem('username') != null
  }

  getUserRole() {
    return sessionStorage.getItem('role') != null
  }
}
