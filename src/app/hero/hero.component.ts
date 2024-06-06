import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    AOS.init({
      duration: 1200, // Duración de la animación en milisegundos
    });
  }

  ngAfterViewInit() {
    this.initializeFeedbackRotation();
  }

  initializeFeedbackRotation() {
    const feedbacks = document.querySelectorAll('.client-feedback');
    let currentFeedbackIndex = 0;

    const showNextFeedback = () => {
      const currentFeedback = feedbacks[currentFeedbackIndex];
      currentFeedback.classList.add('next-leave');

      currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbacks.length;
      const nextFeedback = feedbacks[currentFeedbackIndex];
      nextFeedback.classList.add('next-enter');

      setTimeout(() => {
        currentFeedback.classList.remove('active', 'next-leave');
        nextFeedback.classList.add('active');
        nextFeedback.classList.remove('next-enter');
      }, 500); // Ajusta el tiempo para que coincida con la duración de la transición en CSS
    };

    setInterval(showNextFeedback, 15000);

    feedbacks[currentFeedbackIndex].classList.add('active');
  }
}
