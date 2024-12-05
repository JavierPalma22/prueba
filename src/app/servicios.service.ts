// src/app/servicios.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = 'https://mi-api.com/servicios';  // Reemplaza con tu URL real

  constructor(private http: HttpClient) { }

  obtenerServicios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
