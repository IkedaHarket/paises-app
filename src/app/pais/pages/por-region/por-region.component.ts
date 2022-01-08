import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`

    button{
      margin-right: 9px
    }

    `]
})
export class PorRegionComponent {

  title:string = "Buscar por región 🥝";
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = ''
  paises: Country[]= [];

  constructor(private paisService: PaisService) { }

  activarRegion(region:string){
    if(region === this.regionActiva) return
    this.regionActiva = region;
    this.paises = []
    this.buscar();
  }

  getClaseCSS(region: string):string{
    return (region === this.regionActiva)? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  buscar(){
    this.paisService.buscarRegion(this.regionActiva)
        .subscribe({
          next: (paises)=>{
            this.paises = paises
          },
          error:()=> {
            this.paises = [];
          }
        })
  }
}
