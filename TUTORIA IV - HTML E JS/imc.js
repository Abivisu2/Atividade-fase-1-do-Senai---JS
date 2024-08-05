/* 1) Criar um sistema (de acordo com a imagem) onde o usuário digite seu peso e altura, seja calculado o IMC (peso / altura * altura). Mostrar no campo de IMC o valor do IMC com duas casas após a vírgula, e no campo resultado o resultado de acordo com a tabela abaixo.

IMC menor que 15 -> "Muito abaixo do Peso"
IMC igual ou maior que 15 e menor que 18 -> "Abaixo do Peso"
IMC igual ou maior que 18 e menor que 25 -> "Peso Adequado"
IMC igual ou maior que 25 e menor que 28 -> "Acima do Peso"
IMC igual ou maior que 28 -> "Muito acima do Peso" */

let pesoDigitado = document.getElementById("inptPeso")
let alturaDigitado = document.getElementById("inptAltura")
let valorImc = document.getElementById("inptImcCalculado")
let resultadoImc = document.getElementById("inptResultadoImc")
let resolucao

function Calcular() {


        resolucao = Number(pesoDigitado.value / (alturaDigitado.value * alturaDigitado.value)).toFixed(2)
        valorImc.value = resolucao

        if(pesoDigitado.value == "" || alturaDigitado.value == ""){

            alert("Preencha todos os campos, por favor!")
    
        }else{
    
            
            if(resolucao < 15){
                resultadoImc.value = "Muito abaixo do Peso"
            }
        
            else if(resolucao >= 15 && resolucao < 18){
        
                resultadoImc.value = "Abaixo do Peso"
            }
        
            else if(resolucao >= 18 && resolucao < 25){
        
                resultadoImc.value = "Peso Adequado"
            }
        
            else if(resolucao >= 25 && resolucao < 28){
        
                resultadoImc.value = "Acima do Peso"
            }
        
            else if(resolucao >= 28){
        
                resultadoImc.value = "Muito acima do Peso"
            }

        }
    

}