import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PacienteAlergiaInterface } from '../interfaces/PacienteAlergiaInterface';


@Injectable({
  providedIn: 'root'
})
export class PacienteAlergiaService {

  baseUrl: string = 'https://localhost:44357/pacientealergia';
  //baseUrl: string = 'https://localhost:44357/weatherforecast';

  constructor(private http: HttpClient) { }

  /*getPacientes(){
    return this.http.get<PacienteInterface[]>(this.baseUrl).pipe(
      map((resp:any)=>resp)
    );
    //return this.http.get(this.baseUrl);
    //console.log( this.http.get(this.baseUrl));
  }*/
}
