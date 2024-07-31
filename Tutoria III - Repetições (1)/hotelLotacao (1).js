/* 2) Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas.  Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres). */

let totalLeitos = 130
let leitosOcupados = 25
let metadeLeitos = Number(totalLeitos/2)
let vagasLivre = totalLeitos - metadeLeitos - leitosOcupados
let entradaHospedes 
let limiteMaximoDeVagas = 40
  


while(vagasLivre >= 0){
    
    entradaHospedes = Number(prompt("Digite o número de hospedes que entrou (com números positivos) ou que saiu do hotel(com números negativos): "))

    //Verificar essa parte do código
    if (entradaHospedes > 0){

        vagasLivre = vagasLivre - entradaHospedes
        
    }else{
        
        if(vagasLivre == limiteMaximoDeVagas){

            alert("Não é possível abrir novas vagas, as 40 vagas disponíveis já estão livres.")

        
        }else{

         vagasLivre = vagasLivre - entradaHospedes
        
        }
    
    }    
    
}    

alert(` Não é possivel pois execede o número de leitos em: ${(vagasLivre * (-1)) }.`)





