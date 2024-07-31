/* 6) SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada na área da tecnologia. Dentro do SCRUM, o planejamento é realizado através de 'sprints' que normalmente variam de 15 a 30 dias. Criar um programa onde o usuário deve digitar o tempo total do projeto em dias e o período das sprints. Após calculado o número de sprints (média), cadastrar para cada sprint um título e um objetivo. */

let tempoTotalprojeto
let periodoSprints
let tituloSprint
let OjbetivoSprint

tempoTotalprojeto = Number(prompt("Digite o tempo total do projeto em dias: "))
periodoSprints = Number(prompt("Digite o período das sprints em dias (entre 15 a 30): "))

while(periodoSprints < 15 || periodoSprints > 30){

    alert("Inválido!\nDigite o período das sprints em dias que estejam entre (15 a 30)")
    periodoSprints = Number(prompt("Digite o período das sprints em dias (entre 15 a 30): "))
}

    mediaSprints = tempoTotalprojeto / periodoSprints
    
    alert(`O seu projeto possui ${mediaSprints} prints`)
    
    for(i = 0; i < mediaSprints; i++){
    
        tituloSprint = prompt(`Digite o título da sprint ${i + 1}: `)
        OjbetivoSprint = prompt(`Digite o objetivo da sprint ${i + 1}: `)
        
        alert(`sprints ${i + 1}: \nTítulo sprint: ${tituloSprint} \nObjetivo sprint: ${OjbetivoSprint}`)
    }
