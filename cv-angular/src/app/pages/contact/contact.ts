import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  formData = { email: '', message: '' };
  sending = false;
  success = false;
  error = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.sending = true;
    this.error = false;

    this.http.post(
      'https://formspree.io/f/mrearkqg',
      this.formData,
      { headers: { 'Accept': 'application/json' } }
    ).subscribe({
      next: () => {
        this.sending = false;
        this.success = true;
        this.formData = { email: '', message: '' };
      },
      error: () => {
        this.sending = false;
        this.error = true;
      }
    });
  }
}