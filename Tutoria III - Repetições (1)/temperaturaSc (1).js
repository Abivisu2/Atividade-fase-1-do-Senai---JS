/* 5) Santa Catarina é conhecida por suas quatro estações bem definidas, o que o torna um estado com alta amplitude térmica (diferença entre a maior e a menor temperatura, registrada em um período). O INMET, Instituto Nacional de Meteorologia, pretende ter os dados de amplitude térmica de uma cidade ou estado. Desenvolva um programa que calcule e mostre os dados diários (segunda à sexta) e a média de amplitude térmica semanal, mostrando os resultados ao final. Exemplo: Digitar o nome da cidade ou estado, perguntar para os cinco dias da semana a maior temperatura do dia e a menor. Mostrar as amplitudes de cada dia e a média. */

let amplitudeTermicaDiaria
let nomeEstado
let maiorTemperatura, menorTemperatura
let listaAmplitudes = ''
let somaAmplitudes = 0
let mediaAmplitudeSemanal = 0
let quantidadeDeDias = 5

contador = 1


nomeEstado = prompt("Digite o nome da cidade ou estado: ")

while(contador < quantidadeDeDias){
    
    maiorTemperatura = Number(prompt("Digite a maior temperatura (Celsius) do dia: "))
    menorTemperatura = Number(prompt("Digite a menor temperatura (Celsius) do dia: "))
    
    amplitudeTermicaDiaria = maiorTemperatura - menorTemperatura
    somaAmplitudes = somaAmplitudes + amplitudeTermicaDiaria
    listaAmplitudes = listaAmplitudes + `Dia ${contador}: ${amplitudeTermicaDiaria} Graus\n`
    
    contador = contador + 1
}

mediaAmplitudeSemanal = Number((somaAmplitudes / quantidadeDeDias).toFixed(2))

alert("Nome da cidade: " +nomeEstado)
alert(`\nAmplitudes têrmicas de cada dia (Segunda a sexta):\n ${listaAmplitudes}\nMédia de amplitudes têrmicas semanal: ${mediaAmplitudeSemanal}`)