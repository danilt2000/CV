const gear = document.querySelector('.gear');
const scrollIndicator = document.querySelector('.scroll-indicator');

const audio = new Audio('gear.mp3');

audio.volume = 0.1;

let isPlaying = false;
let scrollIndicatorFilled = false;

gear.addEventListener('click', () => {
  audio[isPlaying ? 'pause' : 'play']();
  isPlaying = !isPlaying;
})


const onScroll = () => {
  // Update gear position based on scroll
  gear.style.left = window.scrollY > 50 ? '-145px' : 'calc(33% - 50px)';

  if (!scrollIndicatorFilled) {
    const scrollProgress = document.documentElement.scrollTop /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const newWidth = scrollProgress * document.documentElement.clientWidth;

    // Update the scroll indicator width
    scrollIndicator.style.width = `${newWidth}px`;

    // Check if the indicator has filled up
    if (newWidth >= document.documentElement.clientWidth) {
      scrollIndicatorFilled = true; // Set the flag to true
      scrollIndicator.style.width = '100%'; // Ensure the indicator is completely filled
    }
  }
};


// const onScroll = () => {
//   gear.style.left = window.scrollY > 50 ? '-145px' : 'calc(33% - 50px)';
//   scrollIndicator.style.width = `${(document.documentElement.scrollTop /
//     (document.documentElement.scrollHeight -
//       document.documentElement.clientHeight)) *
//     document.documentElement.clientWidth}px`
// }

onScroll();
window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);

function isUserAtBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function handleScroll() {
  if (isUserAtBottom()) {
    // alert("Вы достигли конца страницы!");
    scrollImages();
    console.log("Вы достигли конца страницы!");
  }
}

window.addEventListener('scroll', handleScroll);


function scrollImages() {
  var container = document.getElementById('image-container'); // Find the container by its ID
  var images = container.querySelectorAll('.auto-photo'); // Select all images within the container

  if (images.length > 0) {

    var sectionElements = container.querySelectorAll('.section-element'); // Select all images within the container

    for (let i = 0; i < container.children.length; i++) {
     const sectionElement = sectionElements[i]; // Get the first image

      let contentClone = sectionElement.cloneNode(true); // Клонировать i-ый элемент
      container.appendChild(contentClone); // Добавить клон в контейнер
    }

    console.log("Image processed and moved to the front.");

  }
}