/* 3) O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal. */

let altitudeCume = 8848, BaseSUl = 5360, diasNecessários = 0, altitudeMetrosDigitada
let totalMaximoDias = 8

altitudeMetrosDigitada = Number(prompt("Digite a altitude escalada no dia, em metros: "))


while(BaseSUl < altitudeCume){

    BaseSUl = BaseSUl + altitudeMetrosDigitada
        diasNecessários = diasNecessários + 1

    if(diasNecessários >= 8 && BaseSUl < altitudeCume){
        alert("Você deve voltar, pois corre risco de ficar sem oxigênio")
        break
    }
    else if(diasNecessários < 8 && BaseSUl >= altitudeCume){
        alert("Parabéns, atingiu o cume.\nQuantidade de dias percorridos: "+ diasNecessários ) 
        break
    }
}