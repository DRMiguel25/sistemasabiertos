import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Character } from '../models/character.interface';
import { CharacterListComponent } from "../character-list/character-list.component";


@Component({
  selector: 'app-dragonball-super',
  standalone: true,
  imports: [CommonModule, FormsModule, CharacterListComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrls: ['./dragonball-super.component.css']
})
export class DragonballSuperComponent {
  name = signal("");
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
    { id: 3, name: 'Krilin', power: 1001 },
    { id: 4, name: 'Yamcha', power: 500 }
  ]);

  addCharacter() {
    if (this.name().trim() && this.power() > 0) {
      const newCharacter: Character = {
        id: this.characters().length + 1,
        name: this.name().trim(),
        power: this.power()
      };
      this.characters.set([...this.characters(), newCharacter]);
      this.name.set('');
      this.power.set(0);
    }
  }
}
