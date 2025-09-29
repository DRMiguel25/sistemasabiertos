import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.scss']
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 9001},
    {id: 3, name: 'Krilin', power: 9001}
  ]);
}
