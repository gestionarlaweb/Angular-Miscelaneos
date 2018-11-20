# Miscelaneos

Proyecto con ejemplos varios de como manejar los componentes, directivas de atributos

## ng

Ejemplos de ngStye, ngClass, ngSwitch....

## Directivas

También muestro un ejmplo de directivas personalizadas, resaltando un texto.

@HostListener('mouseenter') mouseEntro(){
    this.resaltar( this.nuevoColor ||  'yellow' );
  }
  @HostListener('mouseleave') mouseSalio(){
    this.resaltar( null );
