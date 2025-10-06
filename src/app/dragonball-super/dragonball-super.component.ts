import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Character } from '../interfaces/character.interface';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-dragonball-super',
  standalone: true,
  imports: [CommonModule, FormsModule, CharacterListComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrls: ['./dragonball-super.component.css'],
})
export class DragonballSuperComponent {
  name = signal(this.loadName());
  power = signal(this.loadPower());
  characters = signal<Character[]>(this.loadCharacters());

  constructor() {
    effect(() => {
      localStorage.setItem('characters-super', JSON.stringify(this.characters()));
    });

    effect(() => {
      localStorage.setItem('name-super', this.name());
    });

    effect(() => {
      localStorage.setItem('power-super', this.power().toString());
    });
  }

  addCharacter() {
    if (this.name().trim() && this.power() > 0) {
      const newCharacter: Character = {
        id: this.characters().length + 1,
        name: this.name().trim(),
        power: this.power(),
      };
      this.characters.set([...this.characters(), newCharacter]);
      this.name.set('');
      this.power.set(0);
    }
  }

  private loadCharacters(): Character[] {
    const data = localStorage.getItem('characters-super');
    return data
      ? JSON.parse(data)
      : [
          { id: 1, name: 'Goku', power: 9001 },
          { id: 2, name: 'Vegeta', power: 8001 },
          { id: 3, name: 'Krilin', power: 1001 },
          { id: 4, name: 'Yamcha', power: 500 },
        ];
  }

  private loadName(): string {
    return localStorage.getItem('name-super') ?? '';
  }

  private loadPower(): number {
    const power = localStorage.getItem('power-super');
    return power ? +power : 0;
  }
}
