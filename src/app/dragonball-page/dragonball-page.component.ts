import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Character } from '../models/character.interface';
import { CharacterListComponent } from "../character-list/character-list.component";

@Component({
  selector: 'app-dragonball-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CharacterListComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.scss']
})
export class DragonballPageComponent {
  name = signal("");
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
    { id: 3, name: 'Krilin', power: 1001 },
    { id: 4, name: 'Yamcha', power: 500 }
  ]);

addCharacter() {
  // Validación: si no hay nombre, no hay poder, o el poder es menor o igual a cero
  if (!this.name() || !this.power() || this.power() <= 0) {
    return;
  }

  // Crea el nuevo personaje
  const newCharacter: Character = {
    id: this.characters().length + 1,
    name: this.name(),
    power: this.power(),
  };

  // Actualiza la lista
  this.characters.set([...this.characters(), newCharacter]);
  // Limpia los campos del formulario
  this.resetFields();
}

// Método para limpiar los campos (debes implementarlo)
resetFields() {
  this.name.set("");
  this.power.set(0);
}

}
