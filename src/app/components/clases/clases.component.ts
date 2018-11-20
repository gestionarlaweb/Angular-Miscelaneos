import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  // creamos variable del tipo string
  alerta:string = "alert-danger"

  // creamos variable booleano
  loading:boolean = false;

  // creamos un objeto del tipo Object
  propiedades:Object = {
    danger:true
  }

  constructor() { }

  ngOnInit() {
  }

  // ejecutamos la función loading desde el boton
  ejecutar(){
    this.loading = true;
    // Queremos que se quite el movimiento del loading a los 1,5 segundos
    setTimeout(()=> this.loading = false, 1500)
  }

}
