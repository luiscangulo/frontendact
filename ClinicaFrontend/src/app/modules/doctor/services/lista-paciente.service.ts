import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PacienteInterface } from '../interfaces/PacienteInterface';


@Injectable({
  providedIn: 'root'
})
export class ListaPacienteService {

  baseUrl: string = 'https://localhost:44357/Paciente';
  //baseUrl: string = 'https://localhost:44357/weatherforecast';

  constructor(private http: HttpClient) { }

  getPacientes(){
    return this.http.get<PacienteInterface[]>(this.baseUrl).pipe(
      map((resp:any)=>resp)
    );
    //return this.http.get(this.baseUrl);
    //console.log( this.http.get(this.baseUrl));
  }
}
