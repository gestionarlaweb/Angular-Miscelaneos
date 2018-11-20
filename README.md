# Miscelaneos

Proyecto con ejemplos varios de como manejar los componentes, directivas de atributos

## ng

Ejemplos de ngStye, ngClass, ngSwitch....

## Directivas

También muestro un ejemplo de directivas personalizadas, resaltando un texto.

## @HostListener

@HostListener('mouseenter') mouseEntro(){

    this.resaltar( this.nuevoColor ||  'yellow' );

  }

  ## @HostListener

  @HostListener('mouseleave') mouseSalio(){
      
    this.resaltar( null );
