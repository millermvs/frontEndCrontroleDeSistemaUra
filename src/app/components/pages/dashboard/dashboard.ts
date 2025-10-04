import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
