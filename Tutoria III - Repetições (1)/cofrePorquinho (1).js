/* 1) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia. */

let contMoedaDeUmCentavo = 0
let contMoedaDeCincoCentavos = 0
let contMoedaDezCentavos= 0
let contMoedaVinteCincoCentavos = 0
let contMoedaCinquentaCentavos = 0
let moedaDigitada, totalMoedas = 0


do{
    moedaDigitada = Number(prompt("Qual moeda você deseja inserir no cofre? "))

    if(moedaDigitada == 1){
        totalMoedas =  totalMoedas + moedaDigitada
        contMoedaDeUmCentavo ++
    }
    else if(moedaDigitada == 5){
        totalMoedas =  totalMoedas + moedaDigitada
        contMoedaDeCincoCentavos++
    }
    else if(moedaDigitada == 10){
        totalMoedas =  totalMoedas + moedaDigitada
        contMoedaDezCentavos++
    }
    else if(moedaDigitada == 25){
        totalMoedas =  totalMoedas + moedaDigitada
        contMoedaVinteCincoCentavos++
    }
    else if(moedaDigitada == 50){
        totalMoedas =  totalMoedas + moedaDigitada
        contMoedaCinquentaCentavos++
    }
        
    else if(moedaDigitada != 0){
            
        alert("Caratere inválido, tente novamente!")
            
    }else{
        
        alert("Saindoooo!")
        
    }
  
}while(moedaDigitada != 0)

    totalMoedas = Number(totalMoedas / 100)

    alert(`Quantidade de cada tipo de moeda: 
        Moeda de 1 centavo: ${contMoedaDeUmCentavo}
        Moeda de 5 centavos: ${contMoedaDeCincoCentavos} 
        Moeda de 10 centavos: ${contMoedaDezCentavos} 
        Moeda de 25 centavos: ${contMoedaVinteCincoCentavos} 
        Moeda de 50 centavos: ${contMoedaCinquentaCentavos}`)

    alert("Total acomulado de economia: R$ "+totalMoedas)
