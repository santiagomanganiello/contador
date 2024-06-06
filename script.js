let counter = document.querySelector('.counter-num');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
let numero = 0;
let contador = 0;

increase.addEventListener('click', (e) => {  
    e.preventDefault();   
    numero = 1;
    contador = (contador + numero);
    counter.textContent = contador;
});

decrease.addEventListener('click', (e) => {
    e.preventDefault();
    numero = 1;
    contador = (contador - numero);
    counter.textContent = contador;
});

reset.addEventListener('click', (e) =>{
    e.preventDefault();
    contador = 0;
    numero = 1;
    counter.textContent = contador;
});
