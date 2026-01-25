const envelopeWrapper = document.getElementById('envelopeWrapper');
const closeBtn = document.getElementById('closeBtn');
let isOpened = false;

envelopeWrapper.addEventListener('click', function(e) {
    if (!isOpened) {
        isOpened = true;
        // First add opening class for flap animation
        this.classList.add('opening');
        
        // After flap opens, slide envelope away
        setTimeout(() => {
            this.classList.add('opened');
        }, 600);
    }
});

closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    isOpened = false;
    envelopeWrapper.classList.remove('opened');
    envelopeWrapper.classList.remove('opening');
});
