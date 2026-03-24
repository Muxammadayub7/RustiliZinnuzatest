document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay = document.querySelector('.timer__text');
    
    // Boshlang'ich vaqtni belgilaymiz (1 minut 59 soniya)
    let time = 60 * 1 + 59; 

    const countdown = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        // Raqamlarni "01", "59" ko'rinishiga keltirish
        const minStr = String(minutes).padStart(2, '0');
        const secStr = String(seconds).padStart(2, '0');

        // HTML strukturasini saqlagan holda raqamlarni yangilash
        if (timerDisplay) {
            timerDisplay.innerHTML = `
                <span>${minStr[0]}</span><span>${minStr[1]}</span>:<span>${secStr[0]}</span><span>${secStr[1]}</span>
            `;
        }

        // Vaqt tugaganda to'xtatish
        if (time <= 0) {
            clearInterval(countdown);
            // Tugaganda nima bo'lishini shu yerga yozish mumkin (masalan: alert)
        }

        time--;
    }, 1000);
});