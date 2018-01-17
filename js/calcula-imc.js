
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    var imc = paciente.querySelector(".info-imc");

    if (peso <= 0 ||peso >= 1000 ) {
        imc.textContent = "Peso inválido";
        paciente.classList.add(".paciente-invalido");
    }else if ( altura < 0 || altura > 3.00 ){
        imc.textContent = "Altura inválida";
        paciente.style.backgroundColor = "lightcoral";        
    }else{
        imc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura){
    let imc = (peso / (altura * altura)).toFixed(2);

    return imc;
}


