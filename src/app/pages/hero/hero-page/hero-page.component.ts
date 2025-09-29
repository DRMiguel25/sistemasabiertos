import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescrription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
