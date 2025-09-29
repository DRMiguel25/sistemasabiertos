import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-counter-page',
  imports: [CommonModule],
  template: `
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card shadow p-4 rounded" style="max-width: 320px; width: 100%;">
        <h1 class="display-1 text-center">{{ counter }}</h1>
        <h2 class="text-center mb-4">Counter Component</h2>
        <div class="d-flex justify-content-center gap-3">
          <button class="btn btn-primary btn-lg" (click)="sumar()">sumar</button>
          <button class="btn btn-danger btn-lg" [disabled]="counter === 0" (click)="restar()">restar</button>
        </div>
      </div>
    </div>
  `
})
export class CounterPageComponent {
  counter = 10;

  sumar() {
    this.counter++;
  }
  
  restar() {
    if (this.counter > 0) this.counter--;
  }
}
