let vetorGeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let vetorPar = []
let vetorImpar = []

let parIndex = 0;
let imparIndex = 0;

function separarParImpar(nums){
for (let i = 0; i < vetorGeral.length; i++) {
    if (vetorGeral[i] % 2 === 0){
        vetorPar[parIndex] = vetorGeral[i];
        parIndex++;
    }
    else {
        vetorImpar[imparIndex] = vetorGeral[i];
        imparIndex++;
    }
}

console.log("Pares:", vetorPar);
console.log("Ímpares:", vetorImpar);
}