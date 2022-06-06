import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DoctorInterface } from '../interfaces/DoctorInterface';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl: string = 'https://localhost:44357/doctor';
  

  constructor(private http: HttpClient) { }

  //getPacientes(){
   // return this.http.get<PacienteInterface[]>(this.baseUrl).pipe(
   //   map((resp:any)=>resp)
   // );
    //return this.http.get(this.baseUrl);
    //console.log( this.http.get(this.baseUrl));
 // }
}
