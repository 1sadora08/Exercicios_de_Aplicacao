let animais = ["gato", "cachorro", "papagaio", "leão", "zebra"];

function contarAnimais(array){
    let contar = 0;
    for (const i = 0; i <= animais.lenght; i++){
        contar = contar + 1;
    }
    return contar;
}

function resultadoAnimais() {
    let total = contarAnimais(animais);
    document.getElementById("resultado1").textContent = "Total de animais: " + total;
}