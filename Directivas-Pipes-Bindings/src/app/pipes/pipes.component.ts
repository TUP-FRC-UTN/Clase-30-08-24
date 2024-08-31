import { Component } from '@angular/core';
import { ExponentialPipe } from '../exponential.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [ExponentialPipe, CommonModule],
  template: `
    <div>
      <h3>Uso de Pipes en Angular</h3>
      <p>Fecha: {{ today | date }}</p>
      <p>Precio: {{ price | currency }}</p>
      <p>Texto en minúsculas: {{ text | lowercase }}</p>
      <p>Texto en mayusculas: {{ text | uppercase }}</p>
      <p>2 elevado a 3 es: {{ 2 | exponential : 3 }}</p>
      <p>5 elevado a 2 es: {{ 5 | exponential : 2 }}</p>
      <p>4 elevado a 1 (por defecto) es: {{ 4 | exponential }}</p>
    </div>
  `,
  styles: ``,
})
export class PipesComponent {
  today: Date = new Date();
  price: number = 1234.56;
  text: string = 'Hello Angular';
}
