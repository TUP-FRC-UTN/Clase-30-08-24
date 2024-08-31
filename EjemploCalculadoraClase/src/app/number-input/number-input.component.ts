import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.css'
})
export class NumberInputComponent {
  
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();
  @Input() placeholder!: string;

  onValueChange(event: Event) {
    const element = event.target as HTMLInputElement
    const newValue = element.valueAsNumber;
    this.valueChange.emit(newValue);
  }
 
}
