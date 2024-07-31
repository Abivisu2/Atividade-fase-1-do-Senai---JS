/* 4) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas. */

let numeroDigitado, tentativas = 0
//let numeroSecreto = 10
let numeroSecreto

//gerador de número secreto
numeroSecreto = Math.floor(Math.random() * 101)

do{
    numeroDigitado = Number(prompt("Digite um número que você imagina ser o número secreto, no intervalo de (0 a 100): "))

    tentativas = tentativas + 1

    if(numeroDigitado < numeroSecreto){
        alert("O número digitado é menor.")
   }
   else if(numeroDigitado > numeroSecreto){
        alert("O número digitado é maior.")
   }
   else{
        alert("\nParabéns, você acertou o número secreto!\nNúmero de tentativas foi: " +tentativas)
   }
   
}while(numeroDigitado != numeroSecreto)
