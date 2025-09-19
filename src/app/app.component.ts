import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ignacio Arana';

  deplicarNumero(valor:number):number{
    return valor*2;
  }

  pelicula={
    titulo:"El padrino",
    anio: 1972,
    genero: "Crimen/Drama"
  }
}
