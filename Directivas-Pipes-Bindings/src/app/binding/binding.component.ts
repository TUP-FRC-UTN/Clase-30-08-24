import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <!-- binding.component.html -->
    <div>
      <h3>Bindings en Angular</h3>
      <!-- Property Binding -->
      <img
        [src]="imagenUrl"
        alt="Imagen de ejemplo"
        style="width: 120px; height: 120px; border-radius:20px"
      />
      <!-- One-Way Binding -->
      <p>Nombre: {{ name }}</p>

      <div class="container mt-2">
        <input
          class="form-control-sm"
          [(ngModel)]="inputText"
          placeholder="Escribe algo aquí"
        />
        <p>
          Texto del input: <span class="text-danger">{{ inputText }}</span>
        </p>

        <!-- Two-Way Binding -->
        <input
          class="form-control-sm"
          [value]="inputOriginal"
          (input)="updateText($event)"
        />
        <p>
          Texto del input: <span class="text-danger">{{ inputOriginal }}</span>
        </p>
      </div>
      <!-- Two-Way Binding -->
    </div>
  `,
  styles: `
`,
})
export class BindingComponent {
  name: string = 'Angular';
  inputText: string = 'NgModel';
  inputOriginal: string = 'Event Input';
  imagenUrl =
    'https://logosandtypes.com/wp-content/uploads/2024/01/angular.svg';

  updateText(value: Event) {
    const input = value.target as HTMLInputElement;
    this.inputOriginal = input.value;
  }
}
