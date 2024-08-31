import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColorFondoDirective } from '../color-fondo.directive';

@Component({
  selector: 'app-app-directivas',
  standalone: true,
  imports: [CommonModule, ColorFondoDirective],
  template: `<div class="container-fluid">
    <h3>ngIf:</h3>
    <button class="btn btn-primary" (click)="cambiarCondicion()">
      Cambiar Condicion
    </button>
    <div *ngIf="condicion; else elseBlock">
      Si es Verdadero se va a mostrar este contenido: {{ condicion }}
    </div>

    <ng-template #elseBlock>
      <div>Si es Falso se va a mostrar este contenido: {{ condicion }}</div>
    </ng-template>

    <h3>ngFor:</h3>
    <ul class="list-group-sm list-group-numbered">
      <li class="list-group-item" *ngFor="let item of items">{{ item }}</li>
    </ul>
    <h3>ngSwitch:</h3>

    <div [ngSwitch]="opcion">
      <p *ngSwitchCase="'opcion1'">Opción 1 seleccionada</p>
      <p *ngSwitchCase="'opcion2'">Opción 2 seleccionada</p>
      <p *ngSwitchDefault>Opción por defecto</p>
    </div>
    <h3>ngClass:</h3>
    <button class="btn btn-primary" (click)="onColor()">Cambiar estilos</button>
    <div
      [ngClass]="{ 'clase-activa': estaActiva, 'clase-inactiva': !estaActiva }"
    >
      Este elemento tendrá una clase diferente basada en estaActiva utilizando
      ngclass
    </div>
    <h3>ngStyle:</h3>
    <div
      [ngStyle]="{
        color: estaActiva ? 'green' : 'red',
        'font-weight': estaActiva ? 'bold' : 'normal'
      }"
    >
      Este elemento tendrá una clase diferente basada en estaActiva utilizando
      ngStyle
    </div>
    <p appColorFondo>
      Este texto esta siendo cambiado por una directiva personalizada
    </p>
  </div>`,
  styleUrl: './app-directivas.component.css',
})
export class AppDirectivasComponent {
  cambiarCondicion() {
    this.condicion = !this.condicion;
  }
  onColor() {
    this.estaActiva = !this.estaActiva;
  }
  condicion: boolean = true;
  items: string[] = ["Angular", "Vue", "React"];
  opcion: string = 'opcion1';
  estaActiva: boolean = true;
}
