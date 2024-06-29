

const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');


function nuevoContador() {  
  let visitas = localStorage.getItem('visitas'); 
  if (!visitas) {
    visitas = 0;
  } else {
    
    visitas = parseInt(visitas) + 1;
  }  
  
  localStorage.setItem('visitas', visitas);  
  
  contadorVisitas.textContent = visitas;
}


function reestablecerContador() {  
  localStorage.setItem('visitas', 0);  
  contadorVisitas.textContent = 0;
}
btnReestablecer.addEventListener('click', reestablecerContador);


nuevoContador();