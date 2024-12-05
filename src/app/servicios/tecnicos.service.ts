import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {
  // Simulación de datos obtenidos del backend
  private tecnicos = [
    { nombre: 'Juan Pérez', especialidad: 'Reparación de hardware', experiencia: 5 },
    { nombre: 'María López', especialidad: 'Instalación de software', experiencia: 3 },
    { nombre: 'Carlos García', especialidad: 'Optimización de sistemas', experiencia: 7 }
  ];

  constructor() {}

  // Método para obtener la lista de técnicos
  obtenerTecnicos(): Observable<any[]> {
    return of(this.tecnicos);
  }
}
