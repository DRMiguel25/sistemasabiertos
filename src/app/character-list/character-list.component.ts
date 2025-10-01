import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../models/character.interface'; 

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  @Input() characters = signal<Character[]>([]); 

  removeCharacter(id: number) {
    this.characters.set(this.characters().filter(c => c.id !== id));
  }

}
