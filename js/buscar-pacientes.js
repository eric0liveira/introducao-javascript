var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {
        let erroAjax = document.querySelector("#erro-ajax");
        
        if (xhr.status == 200) {
            console.log("Carregando...");
            erroAjax.classList.add("invisivel");
            
            
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionaPacienteTabela(paciente);            
            });   
            console.log("Done!");
            
        }else{
            console.log("Erro " + xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
            
        }

             
    });
    xhr.send();    
})