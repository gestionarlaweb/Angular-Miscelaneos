import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p style="font-size: 18px">
      Esto es una etiqueta SIN USAR (ng-style)!
    </p>
    <p [style.fontSize.px]="tamano">
      Esto es una etiqueta USANDO (ng-style)!
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano +5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano -5">
      <i class="fa fa-minus"></i>
    </button>
    <br>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  // Variable  
  tamano:number = 10;
  
  constructor() { }

  ngOnInit() {
  }

}
