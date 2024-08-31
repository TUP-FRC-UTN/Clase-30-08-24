import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css',
})
export class OperationComponent {
  @Input() value1!: number;
  @Input() value2!: number;
  @Output() operationResult = new EventEmitter<number>();
  @Output() clearValues = new EventEmitter<void>();

  add() {
    const result = this.value1 + this.value2;
    this.operationResult.emit(result);
  }

  subtract() {
    const result = this.value1 - this.value2;
    this.operationResult.emit(result);
  }

  multiply() {
    const result = this.value1 * this.value2;
    this.operationResult.emit(result);
  }

  divide() {
    if (this.value2 !== 0) {
      const result = this.value1 / this.value2;
      this.operationResult.emit(result);
    } else {
      alert('No se puede dividir por cero');
    }
  }

  power() {
    const result = Math.pow(this.value1, this.value2);
    this.operationResult.emit(result);
  }

  clear() {
    this.clearValues.emit();
  }
}
