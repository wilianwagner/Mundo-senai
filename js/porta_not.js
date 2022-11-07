var inNot = document.querySelector('[name ="entrada_not"]')
var saidaNot = document.querySelector('#resultado_not')

inNot.addEventListener("change", (e) => {

    //____________________________LÓGICA DA PORTA NOT__________________________________________________________
    if (inNot.checked) var not1 = 1 
    else not1 = 0
    console.log("Not")
    console.log(not1)

    if (not1 == 1) {
        saidaNot.innerHTML = " <p></p> <img src='img/desligado.png'>"
    }
    else {
        saidaNot.innerHTML = " <p></p> <img src='img/ligado.png'></img>"
    }
})