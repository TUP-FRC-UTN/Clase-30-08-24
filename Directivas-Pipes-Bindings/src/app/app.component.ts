import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppDirectivasComponent } from './app-directivas/app-directivas.component';
import { AppDirectivasNuevasComponent } from './app-directivas-nuevas/app-directivas-nuevas.component';
import { PipesComponent } from './pipes/pipes.component';
import { BindingComponent } from './binding/binding.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BindingComponent,AppDirectivasComponent,AppDirectivasNuevasComponent,PipesComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
