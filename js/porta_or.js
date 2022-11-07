var inOr1 = document.querySelector('[name = entrada_or1]')
var inOr2 = document.querySelector('[name = entrada_or2]')
var saidaOr = document.querySelector('#resultado_or')
var or1 = 0
var or2 = 0
inOr1.addEventListener("change", (e) => {

    if (inOr1.checked) or1 = 1
    else or1 = 0
    console.log("Or 1")
    console.log(or1)
    if (or1 == 1 || or2 == 1) {
        saidaOr.innerHTML = " <p></p> <img src='img/ligado.png'></img>"
    }
    else {
        saidaOr.innerHTML = " <p></p> <img src='img/desligado.png'>"
    }
})

inOr2.addEventListener("change", (e) => {

    if (inOr2.checked) or2 = 1
    else or2 = 0
    console.log("Or 2")
    console.log(or2)
    if (or1 == 1 || or2 == 1) {
        saidaOr.innerHTML = " <p></p> <img src='img/ligado.png'></img>"
    }
    else {
        saidaOr.innerHTML = " <p></p> <img src='img/desligado.png'>"
    }
})