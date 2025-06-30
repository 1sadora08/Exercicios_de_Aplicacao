function separaParImpar(nums) {
    let resultado = [[], []]; // resultado[0] = pares, resultado[1] = ímpares

    for (let i = 0; i < nums.length; i++) {
        let numero = nums[i];
        if (numero % 2 === 0) {
            let indicePar = resultado[0].length;
            resultado[0][indicePar] = numero;
        } else {
            let indiceImpar = resultado[1].length;
            resultado[1][indiceImpar] = numero;
        }
    }

    return resultado;
}

function separarNumeros() {
    let entrada = document.getElementById("entradaNumeros").value;
    let numeros = entrada.split(",").map(n => parseInt(n.trim()));
    let separados = separaParImpar(numeros);

    document.getElementById("pares").textContent = separados[0].join(", ");
    document.getElementById("impares").textContent = separados[1].join(", ");
}