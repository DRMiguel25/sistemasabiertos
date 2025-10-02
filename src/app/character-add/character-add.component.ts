import { Component, Input, Output, EventEmitter, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.scss'],
})
export class CharacterAddComponent {
  @Input() name!: WritableSignal<string>;
  @Input() power!: WritableSignal<number>;

  @Output() addCharacter = new EventEmitter<void>();

  onAdd() {
    this.addCharacter.emit();
  }
}
