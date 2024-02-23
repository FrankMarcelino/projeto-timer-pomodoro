// timer

const btnStart = document.getElementById('btn-start')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const timer = document.getElementById('timer')

btnStart.addEventListener('click', () => {
    let durationH =     (parseInt(hour.value)  * 60 * 60)
    let durationM =     (parseInt(minute.value) * 60)   
    let durationS =     (parseInt(second.value))

    timer(duration, display)
}

const timer = (duration, display) => {
    let timer = duration
    let hours, minutem, seconds

    setInterval(() => {
        durationH = Math.floor(timer / 3600)
        durationM = Math.floor(timer % 3600 / 60)
        durationS = Math.floor(timer % 60)

        hours = (durationH < 10) ? '0' + durationH : durationH
        minutem = (durationM < 10) ? '0' + durationM : durationM
        seconds = (durationS < 10) ? '0' + durationS : durationS

        display.innerHTML = 'ACABOU!!'
    }, 1000);
}