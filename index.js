const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")
function setDate(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hour = now.getHours()
    const minutesDeg = ((minutes/60)*360)+90
    const secondDeg = ((seconds/60)*360)+90
    const hourDeg = ((hour/12)*360)+90
    secondHand.style.transform = `rotate(${secondDeg}deg)`
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`
    hourHand.style.transform = `rotate(${hourDeg}deg)`
}
setInterval(setDate,1000);
