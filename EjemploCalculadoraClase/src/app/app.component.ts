import { Component, ViewChild } from '@angular/core';
import { NumberInputComponent } from './number-input/number-input.component';
import { OperationComponent } from './operation/operation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NumberInputComponent, OperationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  updateValue1(value: number) {
    this.valor1 = value;
  }

  updateValue2(value: number) {
    this.valor2 = value;
  }

  setResult(result: number) {
    this.resultado = result;
  }

  clearValues() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = 0;
  }
}
