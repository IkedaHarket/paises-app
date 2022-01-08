import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap,tap} from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Country, Translation, Currency } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  title:string = '';
  // translations !:{ [key: string]: Translation } ;
  translations!: Translation[] ;
  currencies!: Currency[];
  constructor( 
    private activatedRoute:ActivatedRoute,
    private paisService   : PaisService
     ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe( ({id})=>{
    //   this.paisService.getPaisPorCodigo(id)
    //       .subscribe((pais)=>{
    //         console.log(pais)
    //       })
    // })

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.paisService.getPaisPorCodigo(id)),
        // tap(console.log)
        )
      .subscribe((pais)=> {
        this.pais = pais[0];
        this.translations = Object.values(pais[0].translations);
        this.currencies = Object.values(pais[0].currencies);
        this.title = `Pais ${this.pais.name.common} 🐾`;
        // console.log(this.pais)
      })
  }

}
