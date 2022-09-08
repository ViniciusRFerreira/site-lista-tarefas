//obter os elementos da página HTML
const frm = document.querySelector("form");
const dvQuadro = document.getElementById("divQuadro");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do formulario

    console.log("Submit ok")
    const tarefa = frm.inTarefa.value; //obtem o conteudo digitado

    const h5 = document.createElement("h5");
    const texto = document.createTextNode(tarefa);
    h5.appendChild(texto); //define que o texto será filho de h5
    dvQuadro.appendChild(h5); //define que h5 será filho da dvQuadro

    frm.inTarefa.value = "";
    frm.inTarefa.focus();
})

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    if (tarefas.length == 0){
        alert("Não há tarefas para selecionar !")
        return
    }

    //percorrer a lista de elementos h5 inseridos na pagina, as tarefas
    for (let i = 0; i < tarefas.length; i++){
        
    }
});