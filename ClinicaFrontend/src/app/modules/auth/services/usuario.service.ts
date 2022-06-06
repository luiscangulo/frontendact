import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CargarUsuario } from '../interfaces/cargar-usuario.interface';
import { LoginForm } from '../interfaces/login.form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';
import { Usuario } from '../models/usuario.model';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public auth2:any;
  public usuario!: Usuario;
  constructor(private http: HttpClient, private router:Router,private ngZone:NgZone) { }
  get token():string{
    return localStorage.getItem('token') || '';
   }
   get uid():string{
    return this.usuario.uid || '';
  }
  get headers(){
    return {headers: {'x-token': this.token}};
 }
 get role():string{
  return this.usuario.role;
}
guardarLocalStorage(token:string){
  localStorage.setItem('token', token);
  //localStorage.setItem('menu', JSON.stringify(menu));
}
logout(){
  localStorage.removeItem('token');
  //localStorage.removeItem('menu');
    this.ngZone.run(()=>{
      this.router.navigateByUrl('/auth/login');
    });
    
  
}
validarToken(): Observable<boolean>{
   
  return this.http.get(`${base_url}login/renew`,{
    headers:{'x-token':this.token}
  }).pipe(map((resp:any) => {
    const {email,nombre, role, uid, img=''} = resp.usuario;
    this.usuario=new Usuario(nombre, email,'',role,img,uid);
    this.guardarLocalStorage(resp.token);
  return true;
  }),
  catchError(error=>of(false)));
}
crearUsuario(formData: RegisterForm){
  return this.http.post(`${base_url}usuarios`, formData).pipe(tap((resp: any) => {
    this.guardarLocalStorage(resp.token);
  }));
}
actualizarPerfil(data: {email: string, nombre: string, role: string}){
  data = {
    ...data,
    role: this.usuario.role
  }
  return this.http.put(`${base_url}usuarios/${this.uid}`, data, this.headers);
}
login(formData: LoginForm){
  return this.http.post(`${base_url}login`, formData).pipe(tap((resp: any) => {
   this.guardarLocalStorage(resp.token);
  }));
 }
 cargarUsuarios(){
  return this.http.get<CargarUsuario>(`${base_url}usuarios`, this.headers).pipe(map(resp=>{
   const usuarios = resp.usuarios.map(user => new Usuario(user.nombre,user.email,'',user.role,user.img,user.uid));
   return {
     usuarios
   };
  }));
}
eliminarUsuario(usuario:Usuario){
  return this.http.delete(`${base_url}usuarios/${usuario.uid}`, this.headers);
 }
 actualizarRole(usuario:Usuario){
  return this.http.put(`${base_url}usuarios/${usuario.uid}`, usuario, this.headers);
}
}