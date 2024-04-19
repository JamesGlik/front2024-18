function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const isPM = hours >= 12;

    
    hours = hours % 12;
    if (hours === 0) hours = 12;

    const ampm = isPM ? "PM" : "AM";

    
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    
    clock.textContent = timeString;
}


setInterval(updateClock, 1000);


updateClock();