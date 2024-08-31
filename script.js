const gear = document.querySelector('.gear');
const scrollIndicator = document.querySelector('.scroll-indicator');

const audio = new Audio('gear.mp3');

audio.volume = 0.1;

let isPlaying = false;

gear.addEventListener('click', () => {
    audio[isPlaying ? 'pause' : 'play']();
    isPlaying = !isPlaying;
})

const onScroll = () => {
  gear.style.left = window.scrollY > 50 ? '-145px' : 'calc(33% - 50px)';
  scrollIndicator.style.width =`${(document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight)) *
    document.documentElement.clientWidth}px`
}

onScroll();
window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);



