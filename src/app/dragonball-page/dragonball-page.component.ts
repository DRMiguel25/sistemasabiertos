import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Character } from '../interfaces/character.interface';
import { CharacterAddComponent } from '../character-add/character-add.component';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-dragonball-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CharacterAddComponent, CharacterListComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.scss'],
})
export class DragonballPageComponent {
  name = signal(this.loadName());
  power = signal(this.loadPower());
  characters = signal<Character[]>(this.loadCharacters());

  constructor() {
    // Sincronizar cambios en signals con LocalStorage
    effect(() => {
      localStorage.setItem('characters', JSON.stringify(this.characters()));
    });

    effect(() => {
      localStorage.setItem('name', this.name());
    });

    effect(() => {
      localStorage.setItem('power', this.power().toString());
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

  // Métodos para cargar datos desde LocalStorage o valores por defecto
  private loadCharacters(): Character[] {
    const data = localStorage.getItem('characters');
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
    return localStorage.getItem('name') ?? '';
  }

  private loadPower(): number {
    const power = localStorage.getItem('power');
    return power ? +power : 0;
  }
}
