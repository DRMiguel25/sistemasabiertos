import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescrription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description
  });

/*   getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  } */

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
