'use script'


const botaoAdicao = document.getElementById('adicao')

function somar(){
    const num1 = Number (document.getElementById(numero1).value)
    const num2 = Number (document.getElementById(numero2).value)
    const resultado = document.getElementById('resultado')


    resultado.textContent = num1 + num2
}