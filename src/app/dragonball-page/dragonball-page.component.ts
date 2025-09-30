import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.scss']
})
export class DragonballPageComponent {
  nombre = '';
  power = 0;

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
    { id: 3, name: 'Krilin', power: 1001 },
    { id: 4, name: 'Yamcha', power: 500 }
  ]);

  agregar() {
    if (this.nombre.trim() && this.power > 0) {
      const newCharacter: Character = {
        id: this.characters().length + 1,
        name: this.nombre.trim(),
        power: this.power
      };
      this.characters.set([...this.characters(), newCharacter]);
      this.nombre = '';
      this.power = 0;
    }
  }
}
