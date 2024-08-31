import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  template: `<div>
    <h2>{{ title }}</h2>
    <p>Propiedad data: {{ data }}</p>
    <p>Propiedad data2: {{data2}}</p>
    <p>Contador: {{ counter }}</p>
  </div>`,
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements OnInit, OnDestroy, OnChanges
{
  @Input() data: string = '';
  @Input() data2:string = '';
  counter: number = 0;
  title: string;
  intervalId: any;

  // Constructor: Se invoca cuando se crea una instancia del componente.
  constructor() {
    console.log('Constructor: Se ha creado la instancia del componente');
    // Ejemplo: Inicializamos una variable con un valor predeterminado
    this.title = 'Lifecycle Component';
  }

  // ngOnInit: Se invoca una vez que Angular ha inicializado
  //  todas las propiedades de entrada del componente.
  ngOnInit(): void {
    console.log('ngOnInit: Inicialización del componente');
    console.log("propiedad input:" + this.data)
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000); // Incrementa el contador cada segundo
  } 

 

  // ngOnChanges: Se invoca cada vez que cambian los valores de las propiedades @Input.
  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'ngOnChanges: Cambios detectados en las propiedades de entrada',
      changes
    );
    // Ejemplo: Validar si la nueva data cumple con ciertos criterios
    if (changes['data']) {
      console.log('La propiedad data tiene este valor ahora:', this.data);
    }
    if(changes['data2']){
      console.log('La propiedad data2 tiene este valor ahora:', this.data2);
    }
  }

  // ngOnDestroy: Se invoca justo antes de que Angular destruya el componente.
  //  Útil para limpiar recursos (por ejemplo, desuscribir observables o detener timers).
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log('Intervalo limpiado en ngOnDestroy');
    }
  }
}
