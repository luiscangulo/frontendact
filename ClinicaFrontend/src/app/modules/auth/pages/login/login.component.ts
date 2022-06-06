import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  formSubmitted = false;
  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember:[false]
  });
  constructor(private fb: FormBuilder,private router:Router, private usuarioService:UsuarioService,
    private ngZone:NgZone) { }

  ngOnInit(): void {
  }
  login(){
    this.formSubmitted = true;
    console.log(this.loginForm.value);
    if(this.loginForm.invalid){
      return;
    }
    this.usuarioService.login(this.loginForm.value).subscribe(resp => {
      if(this.loginForm.get('remember')!.value){
        localStorage.setItem('email',this.loginForm.get('email')!.value);
      }else{
        localStorage.removeItem('email');
      }
      this.router.navigateByUrl('/admin');
    },err=>{
      Swal.fire('Error',err.error.msg,'error');
    });
    console.log(this.loginForm.value);
//this.router.navigateByUrl('/');
  }
  campoNoValido(campo: string): boolean{
    if(this.loginForm.get(campo)!.invalid && this.formSubmitted){
     return true;
    }else{
      return false;
    }
    }
}
