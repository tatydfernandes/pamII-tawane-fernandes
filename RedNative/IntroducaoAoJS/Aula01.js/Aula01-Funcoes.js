let n1 = 5;
let n2 = 6;

console.log(n1+n2); //soma
console.log(n1-n2); //subtração
console.log(n1*n2); //multiplicação
console.log(n1/n2); //divisão
console.log(n1**n2); //exponenciação
console.log(match.sqrt(n1)); //raizquadrada
console.warn("Olá funções")

function soma(numero1, numero2){
    return numero1 + numero2
}

console.log(soma(4, 19))
console.log(soma(12, 19))

function subtracao(numero1, numero2){
    return numero1 - numero2
}

console.log(subtracao(4, 19))
console.log(subtracao(12, 19))

function multiplicacao(numero1, numero2){
    return numero1 * numero2
}

console.log(multiplicacao(4, 19))
console.log(multiplicacao(12, 19))

function divisao(numero1, numero2){
    return numero1 / numero2
}

console.log(divisao(4, 19))
console.log(divisao(12, 19))

function exponenciacao(numero1, numero2){
    return numero1 ** numero2
}

console.log(exponenciacao(4, 19))
console.log(exponenciacao(12, 19))

function raizquadrada(numero1, numero2){
    return match.sqrt(numero1) 
}

console.log(raizquadrada(4, 19))
console.log(raizquadrada(12, 19))



const divisaoII = (v1, v2) => {
    if (v1 > v2){
        let resultado = v1 / v2;
        return resultado

    }
    return "Insfira um valor para v2 menor"

}

console.log(divisaoII(50, 13))
console.log(divisaoII(13, 40))
