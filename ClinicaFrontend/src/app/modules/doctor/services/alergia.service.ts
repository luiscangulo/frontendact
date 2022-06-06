import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AlergiaInterface } from '../interfaces/AlergiaInterface';


@Injectable({
  providedIn: 'root'
})
export class AlergiaService {

  baseUrl: string = 'https://localhost:44357/Alergia';
  

  constructor(private http: HttpClient) { }

  }

