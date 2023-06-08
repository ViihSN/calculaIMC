/*
Dados IMC:

Abaixo de 17 Muito abaixo do peso;
Entre 17 e 18,49 Abaixo do peso;
Entre 18,5 e 24,99 Peso normal;
Entre 25 e 29,99 Axima do peso.
*/
// Peso / (altura*altura);

//Inicializar as variais:
var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();
    
    peso = document.querySelector('#peso').value;
    altura = document.querySelector('#altura').value;

    imc = peso / (altura * altura); 

    resultado = document.querySelector('#resultado');

    if(imc < 17) {
        resultado.innerHTML = `Seu resultado foi ${imc.toFixed(2)}. </br> ⚠️ Cuidado, você está muito abaixo do peso!`;
    } else if(imc > 17 && imc <= 18.49) {
        resultado.innerHTML = `Seu resultado foi ${imc.toFixed(2)}. </br> ❗ Você está abaixo do peso!`;
    } else if(imc >= 18.50 && imc < 24.99) {
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}. </br> 👍 Esta tudo bem, peso ideal!`;
    } else if(imc > 25 && imc <= 29.99) {
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}. </br> ⚠️ Cuidado, você está acima do peso!`;
    } else if(imc >= 30) {
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}. </br> 🚨 Cuidado, Obesidade!`
    }

   document.querySelector('#peso').value = ''; //Para deixar vazio o campo
   document.querySelector('#altura').value = '';
}