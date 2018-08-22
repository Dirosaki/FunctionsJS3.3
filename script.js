
//Exemplo 1 - Modo de escrita de uma função
function nomeDaFuncao (argumento1, argumento2){
    qualquer coisa que a sua função precise executar;
    return valorDoRetorno;
}


//Exemplo 2 - Função que retorna elevado ao quadrado do numero especificado dentro dos parenteses
function aoQuadrado (numero){
    let resultado = numero ** 2;
    return resultado;
}


//Exemplo 3 - Função que retorna a raiz quadrada de um numero especidado dentro dos parenteses
function raizQuadrada (numero){
    let resultado = Math.sqrt(numero);
    return resultado;
}


//Exemplo 4 - Função que retorna a raiz quadra de uma lista de numeros especificados dentro dos parenteses do []
function raizQuadrada (lista){
    let resultados = [];
    for (let numero of lista){
        resultados.push(Math.sqrt(numero));
    }
    return resultados;
}

function validarNumero(entrada){
    if (entrada === null || isNaN(Number(entrada))){
             return false;
        }
        return true;
}

//"escopo" de função
//escopo global


i = 10;
j = 10;

for (var i = 0; i <= 5; i++){
    console.log(i);
}

for(let j = 0; j<= 5; j++){
    console.log(j);
}


