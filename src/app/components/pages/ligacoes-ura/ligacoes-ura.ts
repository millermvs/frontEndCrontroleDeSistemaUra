import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ligacoes-ura',
  imports: [Navbar, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ligacoes-ura.html',
  styleUrl: './ligacoes-ura.css'
})
export class LigacoesUra {
  ligacoes: Array<{
    id: number;
    protocolo: number;
    telefone: string;
    context: string;
    dataGeracao: string; // ISO
  }> = [];

  //detector de mudancas
  constructor(private cdr: ChangeDetectorRef) {}

  http = inject(HttpClient);

  formControleDatas = new FormGroup({
    dataInicio: new FormControl('', [Validators.required]),
    dataFim: new FormControl('', [Validators.required])
  })

  //ao iniciar a pagina trara as ligacoes do dia
  ngOnInit() {
    const hoje = new Date().toISOString().split('T')[0];
    this.formControleDatas.patchValue({
      dataInicio: hoje,
      dataFim: hoje
    })
    this.listarLigacoesUra();
  }

  listarLigacoesUra() {
    const dataInicio = this.formControleDatas.get('dataInicio')?.value;
    const dataFim = this.formControleDatas.get('dataFim')?.value;

    const authData = sessionStorage.getItem('auth');
    let token = "";

    if (authData) {
      const usuario = JSON.parse(authData);
      token = (usuario.token);
      this.http.get<any>(environment.apiListarLigacoesUra + '/' + dataInicio + '/' + dataFim, { headers: { Authorization: 'Bearer ' + token } })
        .subscribe({
          next: (response) => {
            this.ligacoes = response;
            this.cdr.detectChanges();
            //console.log(response);
          },
          error: (e) => {
            //console.log(e.error);
            this.ligacoes = [];
          }
        })
    }
  }
}
