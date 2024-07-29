function saudacao(nome){
    return `olá ${nome}`
}

const greeting = (name) =>{
    return `hello, ${name}`
}
console.log(saudacao("Anderson"));
console.log(greeting("cristiano"))

// QUESTÃO 2

function quadrado (numero){
    return  `${numero*numero}`
}
console.log(quadrado(6))

// Questão 3

function duplicar (number){
    return `${number*2}`
}
    console.log(duplicar(56))
    

// Questão 4

 function divisao (n1, n2){ // função que divide o primeiro nome pelo segundo
    return `${n1/n2}`

}
console.log(divisao(88, 2));

// Questão 5

function verificarMaioridade (age){   // função para verificar maior idade
    if (age>= 18) {
    return `true`
    }
    else{
        return  `false`
    }
}
console.log(verificarMaioridade(15))
//Questão 6

function cubo (numero){
    return  `${numero**3}`
}
console.log(cubo(6))


// Questão 7

function positivo(num){
    if(num>0)
        return `${num} é positivo`
    else{
    return `${num} é negativo`
    }
}
console.log(positivo(-100))

// Questão 8 

function ehVogal(letra){
 
if (letra == "a" || letra == "e" || letra == "i" || letra == "o"  || letra == "u"){
    return `${letra} é uma vogal`
}
else{
    return `${letra} é uma consoante`
}
}
console.log(ehVogal("z"))

// Questão 9
function converterMaiusculas (minuscula) {
    return  `${minuscula}`.toUpperCase()
}
console.log(converterMaiusculas("deu certo!"))

//Questão 10

function parOUimpar (numero){
if (numero%2==0){
    return `é par`
}
else {
    return `é ímpar`
}
}
console.log(parOUimpar(5))


//Questão 11
function celsiusParaFahrenheit(celsius){
    return `${celsius}`*9/5+ 32
}
console.log(celsiusParaFahrenheit(14))
