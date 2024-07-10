import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nombreFramework: string = 'angular';
  horasbootstrap: number = 300;
  especialista: string = 'Luisa';
  contenidoBootcam = {
    tecnologia1: 'HTML',
    tecnologia2: 'CSS',
    tecnologia3: 'JS',
    tecnologia4: 'Angular',
    tecnologia5: 'NODE.JS',
  };

  saludo() {
    console.log('soy un boton');
  }
  colorFondo: string = 'colorturquesa';
  isLogged: boolean = true;
  isDelete: boolean = false;
  isShowed: boolean = true;

  productos: string[] = ['carros', 'motos', 'bicicletas'];

  manejoMouseOver() {
    console.log('Evento encima de la caja');
    this.colorFondo = 'colorRojo';
  }
  manejoMouseUp() {
    console.log('evento fuera de la caja');
    this.colorFondo = 'colorAzul';
  }
  manejoClick() {
    console.log('Evento click');
    this.colorFondo = 'colorturquesa';
  }
}
