let slider= document.querySelector('.slider');
let cajaTestimonio= document.querySelectorAll('.cont-slider');
let contador= 1;

let tamañoWidth= cajaTestimonio[0].clientWidth;
// La clientWidthpropiedad devuelve el ancho visible de un elemento en píxeles, incluido el relleno, pero no el borde, la barra de desplazamiento o el margen. Entonces aca le estamos diciendo que tamañoWidth va a contener el width de cajaTestimonio.
let intervalo= 3000;
// esto son 3 milisegundos que equivale a 3 segundos.

// setInterval(function(){
//   slides();
// },intervalo)
 let slides= function (){
slider.style.transform= 'translateX(' + (-tamañoWidth*contador)+ 'px)';
slider.style.transition= 'transform 1s';
contador++;

if(contador==cajaTestimonio.length){
    contador=0;
    setTimeout(function(){
        slider.style.transform='translate(0px)';
        slider.style.transition= 'transform 0s';
    },intervalo);
    // usamos setTimeout que solo se ejecuta una vez para que cuando contador sea igual a 0 la transición a la primera caja sea instantaneo.
    // Tuvimos un pequeño error que al terminar la primera vuelta de  slide se cortó la animación, esto se resolvió dando el transition de 1s.
};
}

setInterval(slides,intervalo);







// slider.style.transform= 'translateX(' + (-tamañoWidth*contador)+ 'px)';
// aca le estamos diciendo que slider va a tener un translatex de lo que mida (tamañoWidth * contador) + px. Aquí va la explicación; como tenemos 4 cont-slider lo que debemos hacer es que cada uno haga una transición pero para que cada uno haga una transición tiene que hacer un translate. En este caso el último para llegar a la posición de la primera caja debe hacer un translete de x4 de su width hasta la primera posición, por eso usamos la variable contador, para que si el slider 3 llegue a la primera posición este se debe transladar x3 hasta la primera posición.
// los px es para decirle que el resultado de tamañoWdith*contador tiene que ser en px, por eso es importante la concatenación.
// Para poder lograr esto creamos una variable llamada contador en la que cada vez un slider haga una transición este se le sumará 1 hasta llegar al último slider.


