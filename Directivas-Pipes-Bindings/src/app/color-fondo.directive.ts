import { Directive, ElementRef, HostListener, Input, ViewChild} from '@angular/core';

@Directive({
  selector: '[appColorFondo]',
  standalone: true
})
export class ColorFondoDirective {

  constructor(private el: ElementRef) {
    const element = el.nativeElement;

    // Aplicando estilos
    element.style.backgroundColor = 'black';
    element.style.color = 'red';
    element.style.fontWeight = 'bold';
    element.style.fontSize = '20px';

    // Asegurando que el fondo se ajuste solo al contenido
    element.style.display = 'inline-block';
    element.style.padding = '2px 4px'; // Opcional: Agregar padding para espacio interno
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log('El mouse ha entrado en el elemento');
    const element = this.el.nativeElement;
    element.style.backgroundColor='green'


  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log('El mouse ha salido del elemento');
    const element = this.el.nativeElement;
    element.style.backgroundColor='yellow'
  }

  @HostListener('click') onClick() {
    console.log('El elemento ha sido clickeado');
    const element = this.el.nativeElement;
    element.style.backgroundColor='aqua'
  }
}
