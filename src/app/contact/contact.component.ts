import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    AOS.init({
      duration: 1200, // Duración de la animación en milisegundos
    });
  }

  ngAfterViewInit() {
    this.initializeFormSubmit();
  }

  initializeFormSubmit() {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    const formMessages = document.getElementById('form-messages');

    if (form && formMessages) { // Verificación de nulidad
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        try {
          const response = await fetch(form.action, {
            method: 'POST',
            headers: {
              'Accept': 'application/json'
            },
            body: formData
          });

          if (response.ok) {
            formMessages.innerHTML = '<p class="success">¡Gracias por tu mensaje! Te responderemos pronto.</p>';
            form.reset();
          } else {
            formMessages.innerHTML = '<p class="error">Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.</p>';
          }
        } catch (error) {
          formMessages.innerHTML = '<p class="error">Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.</p>';
        }
      });
    }
  }
}
