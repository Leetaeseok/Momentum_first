const clock = document.querySelector("#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours())
    const minute = String(date.getMinutes())
    const second = String(date.getSeconds())
    
    clock.innerText =`${hours.padStart(2,0)}:${minute.padStart(2,0)}:${second.padStart(2,0)}`;
}

getClock();
setInterval(getClock, 1000);