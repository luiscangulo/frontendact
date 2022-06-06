import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HistorialCitasPacienteInterface } from '../interfaces/HistorialCitasPacienteInterface';


@Injectable({
  providedIn: 'root'
})
export class HistorialCitasPacienteService {

  baseUrl: string = 'https://localhost:44357/CitaPaciente/HistorialCitas/1';
  //baseUrl: string = 'https://localhost:44357/weatherforecast';

  constructor(private http: HttpClient) { }

  //getPacientes(){
   // return this.http.get<PacienteInterface[]>(this.baseUrl).pipe(
   //   map((resp:any)=>resp)
   // );
    //return this.http.get(this.baseUrl);
    //console.log( this.http.get(this.baseUrl));
 // }
}
