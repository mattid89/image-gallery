import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../models/interfaces/api-auth-response.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl: string;
    private apiKey: string;

    public getToken = () => JSON.parse(localStorage.getItem('token'));
    public setToken = (token: string) => localStorage.setItem('token', JSON.stringify(token));
  
    constructor(private http: HttpClient) {
      this.apiUrl = environment.agile.url;
      this.apiKey = environment.agile.apiKey;
    }
    
    auth() {
      return this.http.post<AuthResponse>(
        `${this.apiUrl}/auth`, { "apiKey": this.apiKey }
      );
    }

}
