/*7) Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é o dado D20. Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar um sistema simples de jogo, onde no início é solicitado o número de jogadores e para cada jogador deve-se armazenar valores de quatro jogadas de um D20. A pontuação do jogador é definida excluindo o primeiro e o último valor, somando então os valores da segunda e terceira jogadas. Ao final mostrar a soma de cada jogador. (DESAFIO: validar os valores de 1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos valores do dado, repetir a pergunta) */

let numeroDeJodagoresDigtados
let numerJogadas = 4
let valorJodaGadas
let SomaJogadas = 0
let somaDeCadaJogador = ""


numeroDeJodagoresDigtados = Number(prompt("Digite a quantidade de jodadores: "))

for(i = 0; i < numeroDeJodagoresDigtados; i++){
    
    for(j = 0; j < numerJogadas; j++){

        do{

    
            valorJodaGadas = Number(prompt(`Valor da jogada ${j + 1} do dado, jogador ${i + 1}: `))

            if(valorJodaGadas < 1 || valorJodaGadas > 20){
                alert("O valor da jogada deve ser de 1 a 20!")

            }
    
        }while(valorJodaGadas < 1 || valorJodaGadas > 20)

        if(j > 0 && j < 3){

            SomaJogadas += valorJodaGadas
        }

    }

    somaDeCadaJogador = somaDeCadaJogador + `Pontuação jodador ${i + 1}: ${SomaJogadas}\n`
    SomaJogadas = 0

}

alert(`Resultado final do jogo:\n ${somaDeCadaJogador}`)
