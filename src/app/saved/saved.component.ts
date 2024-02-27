import { Component } from '@angular/core';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent {
  savedResults: any[] = [];

  ngOnInit() {
    // Al inicializar el componente, obtener resultados guardados del localStorage
    this.obtenerResultadosGuardados();
  }

  obtenerResultadosGuardados() {
    const resultadosGuardadosString = localStorage.getItem('resultados');

    if (resultadosGuardadosString) {
      this.savedResults = JSON.parse(resultadosGuardadosString);
    }
  }

  borrarResultado(index: number) {
    // Eliminar el resultado en el índice dado
    this.savedResults.splice(index, 1);
    // Actualizar el localStorage con la nueva lista de resultados
    localStorage.setItem('resultados', JSON.stringify(this.savedResults));
  }
}