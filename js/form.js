var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    
    if( !erros.valida ){
        exibeMensagemDeErro(erros.mensagem);
        return;
    }
        

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
});

function exibeMensagemDeErro(erros) {
    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "infor-imc"));

    return pacienteTr;
}

function montaTd(valor, classe) {
    let td = document.createElement("td");
    td.textContent = valor;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    let erro = [];
    let retorno = {};

    retorno.valida = true;

    if(!validaPeso(paciente.peso)) {
        erro.push("Peso inválido");
        retorno.valida = false;
    }
    if (!validaAltura(paciente.altura)) {
        erro.push("Altura inválida");
        retorno.valida = false;
    }

    retorno.mensagem = erro;

    return retorno;
}