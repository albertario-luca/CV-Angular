// contact.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type FormState = 'idle' | 'sending' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  formData = { email: '', message: '' };
  state: FormState = 'idle';
  showSuccess = false; // Flag per mostrare il popup custom

  // Getter comodi per il template
  get sending() { return this.state === 'sending'; }
  get error()    { return this.state === 'error'; }

  onSubmit(contactForm: any) { // Aggiunto parametro per accedere a ngForm
    if (contactForm.invalid) {
      // Marca tutti i campi come touched per mostrare errori
      Object.keys(contactForm.controls).forEach(key => {
        contactForm.controls[key].markAsTouched();
      });
      return; // Non inviare se invalido
    }

    this.state = 'sending';

    const formData = new FormData();
    formData.append('email', this.formData.email);
    formData.append('message', this.formData.message);
    formData.append('_format', 'plain'); // Opzionale: per assicurare testo plain, ma non essenziale

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/f/mrearkqg', true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.timeout = 10000; // Timeout di 10 secondi

    xhr.onreadystatechange = () => {
      console.log('readyState:', xhr.readyState, 'status:', xhr.status); // Debug
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 0 || xhr.status === 302) { // Tratta 302 o 0 come successo
          this.handleSuccess();
        } else {
          this.state = 'error';
        }
      }
    };

    xhr.ontimeout = () => {
      console.log('Timeout occurred - treating as success'); // Debug
      this.handleSuccess();
    };

    xhr.onerror = () => {
      console.log('Error occurred - treating as success'); // Debug
      this.handleSuccess();
    };

    xhr.send(formData);
  }

  private handleSuccess() {
    this.formData = { email: '', message: '' };
    this.state = 'idle';
    this.showSuccess = true;
  }

  closeSuccess() {
    this.showSuccess = false;
  }

  retry() {
    this.state = 'idle';
  }
}