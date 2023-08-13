const hr = document.querySelector('#horas')
const min = document.querySelector('#minutos')
const seg = document.querySelector('#segundos')

const tempo = setInterval(function time(){
    let sistema = new Date()
    let hora =sistema.getHours()
    let minutos = sistema.getMinutes()
    let segundos = sistema.getSeconds()

    if(hora<10){
        hora = "0"+ hora
    }
    if(minutos<10){
       minutos = "0"+ minutos
    }
    if(segundos<10){
        segundos = "0"+ segundos
    }

    hr.textContent= hora;
    min.textContent= minutos;
    seg.textContent= segundos; 

    



},1000)

