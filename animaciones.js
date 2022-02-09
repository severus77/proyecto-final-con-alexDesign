window.addEventListener('scroll',function(){
    let animacion1 = document.getElementById('ilustracion1');
    // cuando vamos a selecionar un elmento o una clase, id con getElement no hace falta poner el . punto.
    let posicion1 = animacion1.getBoundingClientRect().top;
    // aca le estamos diciendo que posicion1 va a contener la posición relativa de animacion1 con el top de la ventana gráfica.
let animacion2= document.querySelectorAll('.card-acerca-de');
// aca usamos el . punto porque para seleccionar los elementos en query.Selector debemos poner con la clase que estamos seleccioanando.
let posicion2= animacion2[0].getBoundingClientRect().top;

let tamañoPantalla= window.innerHeight/4;
// tamañoPantalla va tener como valor el tamaño de la pantalla dividido 4.

if(posicion1 < tamañoPantalla){
    animacion1.style.animation= 'imagenes 1s';
}

if(posicion2 < tamañoPantalla){
    animacion2[0].style.animation= 'imagenes 1s';
    animacion2[1].style.animation= 'imagenes 1s .5s';
    animacion2[2].style.animation= 'imagenes 1s 1s';
    // cuando tenemos varios elementos debemos seleccionarlos por separado para darle los efectos. Aun no se como se hace para que todos tengan el mismo efecto usando menos código.
}
})