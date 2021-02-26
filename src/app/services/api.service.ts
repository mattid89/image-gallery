import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GalleryResponse } from '../models/interfaces/api-gallery-response.interface';
import { AuthService } from './auth.service';
import { Image } from '../models/classes/image.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.apiUrl = environment.agile.url;
  }

  generateHeader(token: string): HttpHeaders {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
  }

  getImages(page: number): Observable<GalleryResponse> {

    const token = this.authService.getToken();
    const headers = this.generateHeader(token);

    return this.http.get<GalleryResponse>(
      `${this.apiUrl}/images?page=${page}`, { headers }
    );
  }

  getImage(id: string): Observable<Image> {

    const token = this.authService.getToken();
    const headers = this.generateHeader(token);

    return this.http.get<Image>(
      `${this.apiUrl}/images/${id}`
    );
  }

  

}
