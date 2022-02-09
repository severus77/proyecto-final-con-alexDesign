let menu= document.getElementById('enlaces');
let hamburguesa= document.getElementsByClassName('menu-header')[0];
let toggle= function(){
    menu.classList.toggle('extra-clase');};
    // aca usamos La classListpropiedad es útil para agregar, eliminar y alternar clases CSS en un elemento. En este caso le estamos diciendo que menu va a intercambiar con 'extra-clase'. Esto lo hacemos para que el clip-path de menu sea intercambiado por el de 'extra-clase'.
    


hamburguesa.addEventListener('click',toggle);

