// Selecting The Clock Hands
const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

// Calculation for ratating the hand accourding to time
function setTime () {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    var secondsRatio = (seconds / 60)
    var secondDeg = (secondsRatio * 360);
    secondHand.style.setProperty('--rotation', secondDeg)
    
    var minutesRatio = ((secondsRatio + minutes) / 60);
    var minuteDeg = (minutesRatio * 360);
    minuteHand.style.setProperty('--rotation', minuteDeg)

    var hoursRatio = ((minutesRatio + hours) / 12);
    var hourDeg = (hoursRatio * 360);
    hourHand.style.setProperty('--rotation', hourDeg)
}

setInterval(setTime, 1000); // To make shure the clock is updating every second
setTime();