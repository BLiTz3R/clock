const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    
    // Seconds hand
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60 * 360) + 90; // offset by 90 degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Minutes hand
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60 * 360) + 90; // offset by 90 degrees
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Hours hand
    const hours = now.getHours();
    const hoursDegrees = (hours / 12 * 360) + 90; // offset by 90 degrees
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);