import { Component } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {

  opciones = [
    { value: 'opcion1', label: 'km → miles', literal:'Km', literalResultado:'miles' },
    { value: 'opcion2', label: 'miles → km', literal:'miles', literalResultado:'Km' },
    { value: 'opcion3', label: 'feet → metres', literal:'feet', literalResultado:'metres' },
    { value: 'opcion4', label: 'metres → feet', literal:'metres', literalResultado:'feet' },
    { value: 'opcion5', label: 'cm → inches', literal:'cm', literalResultado:'inches' },
    { value: 'opcion6', label: 'inches → cm', literal:'inches', literalResultado:'cm' }
  ];

  seleccion: string = 'opcion1';
  valor: number = 0;
  resultado: number | string = '0';
  literal: string ='Km';
  literalResultado: string ='miles';
  opcionSeleccionada: any;
    

  OnInit(){

  }

  calcularConversion() {
    const opcionSeleccionada = this.opciones.find(opcion => opcion.value === this.seleccion);
  
    if (opcionSeleccionada) {
      switch (opcionSeleccionada.value) {
        case 'opcion1':
          this.resultado = this.valor * 0.621371; // km a millas
          this.literal = opcionSeleccionada.literal;
          this.literalResultado = opcionSeleccionada.literalResultado;
          break;
        case 'opcion2':
          this.resultado = this.valor / 0.621371; // millas a km
          this.literal = opcionSeleccionada.literal;
          this.literalResultado = opcionSeleccionada.literalResultado;
          break;
        case 'opcion3':
          this.resultado = this.valor * 0.3048; // pies a metros
          this.literal = opcionSeleccionada.literal;
          this.literalResultado = opcionSeleccionada.literalResultado;
          break;
        case 'opcion4':
          this.resultado = this.valor / 0.3048; // metros a pies
          this.literal = opcionSeleccionada.literal;
          this.literalResultado = opcionSeleccionada.literalResultado;
          break;
        case 'opcion5':
          this.resultado = this.valor * 0.393701; // cm a pulgadas
          this.literal = opcionSeleccionada.literal;
          this.literalResultado = opcionSeleccionada.literalResultado;
          break;
        case 'opcion6':
          this.resultado = this.valor / 0.393701; // pulgadas a cm
          this.literal = opcionSeleccionada.literal;
          this.literalResultado = opcionSeleccionada.literalResultado;
          break;
        default:
          this.resultado = 'Selecciona una opción válida';
      }
    } else {
      this.resultado = 'Selecciona una opción válida';
    }
  }

  guardarResultadoEnLocalStorage() {
    // Obtener resultados anteriores del localStorage
    const resultadosAnterioresString = localStorage.getItem('resultados');
    console.log('PASA')
    if (resultadosAnterioresString) {
        const resultadosAnteriores = JSON.parse(resultadosAnterioresString) || [];

        // Agregar el nuevo resultado
        resultadosAnteriores.push({
            resultado: this.resultado,
            literal: this.literal,
            literalResultado: this.literalResultado
        });

        // Guardar en el localStorage
        localStorage.setItem('resultados', JSON.stringify(resultadosAnteriores));
    } else {
        // Si no hay resultados anteriores, crear una nueva lista
        const nuevosResultados = [{
            resultado: this.resultado,
            literal: this.literal,
            literalResultado: this.literalResultado
        }];

        // Guardar en el localStorage
        localStorage.setItem('resultados', JSON.stringify(nuevosResultados));
    }
  }
}
