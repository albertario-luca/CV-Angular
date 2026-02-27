import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';  // ← questo

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],  // ← e questo
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}