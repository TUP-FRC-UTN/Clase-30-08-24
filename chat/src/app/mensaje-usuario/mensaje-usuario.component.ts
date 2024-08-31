import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="border border-success p-3">
      <div class="form-group">
        <label>Usuario: {{ usuario }}</label>
        <textarea class="form-control" [(ngModel)]="mensaje"></textarea>
      </div>
      <button class="btn btn-primary mt-2" (click)="enviarMensaje()">
        Guardar
      </button>
    </div>
  `,
  styles: ``,
})
export class MensajeUsuarioComponent {
  @Input() usuario!: string;
  @Output() mensajeEnviado = new EventEmitter<{
    usuario: string;
    texto: string;
  }>();

  mensaje: string = '';

  enviarMensaje() {
    if (this.mensaje.trim()) {
      this.mensajeEnviado.emit({ usuario: this.usuario, texto: this.mensaje });
      this.mensaje = '';
    }
  }
}
