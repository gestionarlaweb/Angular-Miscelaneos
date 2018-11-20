import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) { 
    console.log("directiva cargada");
    
  }

  @Input("appResaltado") nuevoColor:string;

  // Cuando el mouse entra se pone el nuevo color asignado en app.component.html o el amarilo por defecto.
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar( this.nuevoColor ||  'yellow' );
  }
  @HostListener('mouseleave') mouseSalio(){
    this.resaltar( null );
  }

  private resaltar( color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
