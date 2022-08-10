window.addEventListener('DOMContentLoaded', ()=>{

    let clicker = document.querySelector('.clicker__cookie'),
        counterTag = document.querySelector('#clicker__counter'),
        counter = Number(document.querySelector('#clicker__counter').textContent),
        clickerSpeed = document.querySelector('#clicker__speed__counter'),
        timeNow = new Date(),
        tumbler = false;

    clicker.addEventListener('click',()=>{
        
        let timeAfterClick = clickerSpeed.textContent = (Date.now() - timeNow) / 1000,
            resultSpeed = counter / timeAfterClick;

        if (!tumbler) {
            clicker.style.width = 210+'px'
            tumbler = true
        }
        else {
            clicker.style.width = 200+'px'
            tumbler = false
        };

        counter += 1
        counterTag.textContent = counter
        clickerSpeed.textContent = resultSpeed.toFixed(1)  + ' кликов / s'
    });
});