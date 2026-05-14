import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Usuarios {
  

}
export interface Usuario{
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com', rol: 'Developer' },
    { id: 2, nombre: 'María Gómez', email: 'maria.gomez@example.com', rol: 'Designer' },
    { id: 3, nombre: 'Carlos Rodríguez', email: 'carlos.rodriguez@example.com', rol: 'Manager' },
  ];

  obtenerUsuarios(): Usuario[] {
    return this.usuarios;
  }
}