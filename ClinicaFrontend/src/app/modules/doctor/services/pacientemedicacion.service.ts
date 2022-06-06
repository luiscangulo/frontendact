import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PacienteMedicacionInterface } from '../interfaces/PacienteMedicacionInterface';


@Injectable({
  providedIn: 'root'
})
export class PacienteMedicacionService {

  baseUrl: string = 'https://localhost:44357/pacientemedicacion';
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
