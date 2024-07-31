/*8) Um determinado restaurante trabalha com limite de lotação de 50 pessoas. Porém, mesmo com esse limite, o restaurante pode encerrar seu atendimento antes do horário por falta de insumos para produção das refeições. Criar um programa que receba os dados da quantidade de pessoas que chegam ao restaurante (repetidamente) e se os insumos estão "ok" ou "insuficientes". Caso alguma das duas possibilidades aconteça, encerrar o programa e mostrar ao final o motivo do encerramento (atingiu limite de pessoa ou faltaram insumos). */

let limiteLotacao = 50
let entradaPessoas 
let insumos
let quantidadePessoas = 0

do{

    entradaPessoas = Number(prompt("Quantas pessoas chegaram no restaurante: "))
    quantidadePessoas = quantidadePessoas + entradaPessoas

    insumos = prompt("Como estão os insumos (ok ou insuficientes): ").toLocaleLowerCase()


}while(quantidadePessoas < limiteLotacao && insumos == "ok")


if(quantidadePessoas >= limiteLotacao && insumos == "ok"){
    alert("Atingiu o limite máximo de pessoas!")
}

else if(quantidadePessoas < limiteLotacao && insumos == "insuficientes"){
    alert("faltaram insumos!")
}

else if(quantidadePessoas >= limiteLotacao && insumos == "insuficientes"){
    alert("Atingiu o limite máximo de pessoas e faltou insumos!")
}