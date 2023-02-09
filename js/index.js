const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

const digitalClock = setInterval(() => {
    let date = new Date() 
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if (hrs < 10) hrs = '0' + hrs

    if (min < 10) min = '0' + min

    if (sec < 10) sec = '0' + sec
    
    hours.innerHTML = hrs
    minutes.innerHTML = min
    seconds.innerHTML = sec

})