import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-directivas-nuevas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<button
      type="button"
      class="btn btn-primary"
      (click)="cambiarCondicion()"
    >
      Cambiar condicion
    </button>
    @if (condicion) {
    <div>Este contenido se mostrará si 'condicion' es verdadera.</div>
    } @else {
    <div>Este contenido se mostrará si 'condicion' es falsa.</div>
    }
    <h3>ngFor:</h3>
    <ul class="list-group-sm list-group-numbered">
      @for(item of items; track item){

      <li class="list-group-item">
        {{ item }}
      </li>
      }
    </ul>

    <h3>ngSwitch:</h3>
    <input
      class="form-control-sm"
      type="text"
      (input)="cambiarSwitch($event)"
    />
    @switch (opcion) { @case ('opcion1') {
    <div>Este contenido se muestra si 'valor' es 'opcion1'.</div>
    } @case ('opcion2') {
    <div>Este contenido se muestra si 'valor' es 'opcion2'.</div>
    } @default {
    <div>
      Este contenido se muestra si 'valor' no coincide con ninguna opción.
    </div>
    } } `,
  styleUrl: './app-directivas-nuevas.component.css',
})
export class AppDirectivasNuevasComponent {
  condicion: boolean = true;
  items: string[] = ['Hola', 'Chau', 'Hello', 'Bye'];
  opcion: string = '';
  estaActiva: boolean = false;

  cambiarCondicion() {
    this.condicion = !this.condicion;
  }
  cambiarSwitch(event: any) {
    this.opcion = event.target.value;
  }
}
