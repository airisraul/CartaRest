import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo.model';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { Familia } from '../../models/familia.model';
import { FamiliaService } from '../../services/familia/familia.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  articulos: Articulo[] = [];
  familias: Familia[] = [];

  constructor(
    private _articuloService: ArticuloService,
    private _familiaService: FamiliaService
    ) {
    console.log('Se injecta servicio articulos');
  }

  ngOnInit(): void {
    this.cargarFamilias();
    this.cargarPlatos();
  }


  cargarPlatos(){

    this._articuloService.getArticulos()
    .subscribe( (resp: any) => {
      console.log(resp);
      this.articulos = resp.articulos;
    });
  }

  cargarFamilias(){

    this._familiaService.getFamilias()
    .subscribe( (resp: any) => {
      console.log(resp);
      this.familias = resp.familias;
    });
  }
}
