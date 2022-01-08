import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  title:string = "Por Capital 🍁";
  termino: string = '';
  hayError: boolean = false;
  paises:Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino:string){

    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
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
}
