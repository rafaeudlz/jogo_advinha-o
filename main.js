// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleClickTry)
btnReset.addEventListener('click', handleClickReset)
document.addEventListener('keydown', enterReset)

// Funções
function handleClickTry (event) {
    event.preventDefault() // não faça o padrão, que é enviar o formulário.

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (!Number(inputNumber.value) && Number(inputNumber.value)!=0)) {
        alert("Por favor insira um número de 0 a 10!")
        }

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Parabéns, você acertou em ${xAttempts} tentativas!`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleClickReset() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterReset (e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleClickReset()
    }
}