import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  router = inject(Router);
  
  logoffUsuario() {
    sessionStorage.removeItem('auth');
    this.router.navigate(["/pages/autenticar-usuario"]);
  }
}
