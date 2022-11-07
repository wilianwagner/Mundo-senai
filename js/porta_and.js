var inAnd1 = document.querySelector('[name = entrada_and1]')
var inAnd2 = document.querySelector('[name = entrada_and2]')
var saidaAnd = document.querySelector('#resultado_and')

var and1 = 0
var and2 = 0

inAnd1.addEventListener("change", (e) => {

    if (inAnd1.checked) and1 = 1
    else and1 = 0
    console.log("And 1")
    console.log(and1)

    if (and1 == 1 && and2 == 1) {
        saidaAnd.innerHTML = " <p></p> <img src='img/ligado.png'></img>"
    }
    else {
        saidaAnd.innerHTML = " <p></p> <img src='img/desligado.png'>"
    }
})

inAnd2.addEventListener("change", (e) => {

    if (inAnd2.checked) and2 = 1
    else and2 = 0
    console.log("And 2")
    console.log(and2)

    if (and1 == 1 && and2 == 1) {
        saidaAnd.innerHTML = " <p></p> <img src='img/ligado.png'></img>"
    }
    else {
        saidaAnd.innerHTML = " <p></p> <img src='img/desligado.png'>"
    }
})
if (and1 == 1 && and2 == 1) {
    saidaAnd.innerHTML = " <p></p> <img src='img/ligado.png'></img>"
}
else {
    saidaAnd.innerHTML = " <p></p> <img src='img/desligado.png'>"
}

