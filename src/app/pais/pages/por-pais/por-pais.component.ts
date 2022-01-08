import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `]
})
export class PorPaisComponent {

  title:string = "Paises del mundo 🌍";
  termino: string = '';
  hayError: boolean = false;
  paises:Country[] = [];
  paisesSugeridos: Country[] =[];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino:string){

    this.termino = termino;
    this.mostrarSugerencias = false;
    this.paisService.buscarPais(this.termino)
        .subscribe({
          next: (paises)=>{
            this.hayError = false
            this.paises = paises
          },
          error:()=> {
            this.hayError = true;
            this.paises = [];
          }
        })
  }
  sugerencias(termino:string){
    this.mostrarSugerencias = true;
    this.hayError = false
    this.termino = termino
    this.paisService.buscarPais(termino)
        .subscribe(paises=>this.paisesSugeridos = paises.splice(0,5));
  }
}
