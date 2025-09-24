import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var window: any;

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  nombre = signal('Miguel');
  edad = signal(25);
  nombreCapitalizado = signal('MIGUEL');

  nuevoNombre = signal('');
  nuevaEdad = signal('');
  nuevoCapitalizado = signal('');

  abrirCambiarNombre() {
    this.nuevoNombre.set(this.nombre());
    let modal = new window.bootstrap.Modal(
      document.getElementById('modalNombre')
    );
    modal.show();
  }

  abrirCambiarEdad() {
    this.nuevaEdad.set(String(this.edad()));
    let modal = new window.bootstrap.Modal(
      document.getElementById('modalEdad')
    );
    modal.show();
  }

  abrirReset() {
    this.nuevoCapitalizado.set(this.nombreCapitalizado());
    let modal = new window.bootstrap.Modal(
      document.getElementById('modalReset')
    );
    modal.show();
  }

  guardarNombre() {
    this.nombre.set(this.nuevoNombre());
  }

  guardarEdad() {
    this.edad.set(Number(this.nuevaEdad()));
  }

  guardarReset() {
    this.nombreCapitalizado.set(this.nuevoCapitalizado());
  }
}
