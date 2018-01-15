
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

var imc = paciente.querySelector(".info-imc");

if (peso <= 0 ||peso >= 1000 ) {
    imc.textContent = "Peso inválido";
}else if ( altura < 0 || altura > 3.00 ){
    imc.textContent = "Altura inválida";
}else{
    imc.textContent = peso / (altura * altura);
}


