const gear = document.querySelector('.gear');

const audio = new Audio('gear.mp3');


audio.volume = 0.1;

let isPlaying = false;

gear.addEventListener('click', () => {
    isPlaying = !isPlaying;
    audio[isPlaying ? 'pause' : 'play']();
})