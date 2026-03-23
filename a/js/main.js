function startTimer(duration, displayMin, displaySec) {
    let timer = duration, minutes, seconds;
    
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // Raqamlar 10 dan kichik bo'lsa, oldiga '0' qo'shish
        displayMin.textContent = minutes < 10 ? "0" + minutes : minutes;
        displaySec.textContent = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            clearInterval(interval);
            // Vaqt tugaganda bajariladigan amalni shu yerga yozish mumkin
            console.log("Vaqt tugadi!");
        }
    }, 1000);
}

// Sahifa yuklanganda timerni ishga tushiramiz
window.onload = function () {
    const totalSeconds = (2 * 60) + 59; // 02:59 ni sekundga aylantirdik
    const displayMin = document.querySelector('#minutes');
    const displaySec = document.querySelector('#seconds');
    
    startTimer(totalSeconds, displayMin, displaySec);
};