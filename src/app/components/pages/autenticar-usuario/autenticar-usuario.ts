import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-autenticar-usuario',
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './autenticar-usuario.html',
  styleUrl: './autenticar-usuario.css'
})

export class AutenticarUsuario {

  private http = inject(HttpClient);
  private router = inject(Router);

  mensagemErro = signal<string>('');

  formAutenticacao = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });
  
  autenticarUsuario(){
    this.http.post(environment.apiAutenticarUsuario, this.formAutenticacao.value).subscribe({
      next: (response: any) => {
        sessionStorage.setItem('auth', JSON.stringify(response));
        this.router.navigate(['/pages/dashboard'])
      },
      error: (e: any) => {
        this.mensagemErro.set(e.error.errors);
      }
    });        
  }
}
