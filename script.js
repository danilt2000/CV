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

    scrollPlayGround();

    scrollWork();

    scrollAbout();
  }
}

window.addEventListener('scroll', handleScroll);

function scrollPlayGround() {
  var container = document.getElementById('playground-right-containers'); // Find the container by its ID

  var sectionElements = container.querySelectorAll('.section-right-elements'); // Select all images within the container

  const sectionElement = sectionElements[0]; // Get the first image

  let contentClone = sectionElement.cloneNode(true); // Клонировать i-ый элемент

  container.appendChild(contentClone);
}

function scrollWork() {
  var container = document.getElementById('playground-centr-containers'); // Find the container by its ID

  var sectionElements = container.querySelectorAll('.section-centr-elements'); // Select all images within the container

  const sectionElement = sectionElements[0]; // Get the first image

  let contentClone = sectionElement.cloneNode(true); // Клонировать i-ый элемент

  container.appendChild(contentClone);
}

function scrollAbout() {
  var container = document.getElementById('playground-left-containers'); // Find the container by its ID

  var sectionElements = container.querySelectorAll('.section-left-elements'); // Select all images within the container

  const sectionElement = sectionElements[0]; // Get the first image

  let contentClone = sectionElement.cloneNode(true); // Клонировать i-ый элемент

  container.appendChild(contentClone);
}













// const employmentDivsLeft = document.getElementById('playground-left-containers');

// var aboutTextElement = document.querySelectorAll('.about-text');

// employmentDivsLeft.addEventListener('mouseenter', () => {
//   aboutTextElement.classList.add('hovered');
// })

// employmentDivsLeft.addEventListener('mouseleave', () => {
//   aboutTextElement.classList.remove('hovered');
// });




const employmentDivsLeft = document.getElementById('playground-left-containers');
const aboutTextElements = document.querySelectorAll('.about-text');

    employmentDivsLeft.addEventListener('mouseenter', () => {
        aboutTextElements.forEach(element => {
            element.classList.add('hovered');
        });
    });

    employmentDivsLeft.addEventListener('mouseleave', () => {
        aboutTextElements.forEach(element => {
            element.classList.remove('hovered');
        });
    });



const employmentDivsCentr = document.getElementById('playground-centr-containers');
const workTextElements = document.querySelectorAll('.work-text');

employmentDivsCentr.addEventListener('mouseenter', () => {
      workTextElements.forEach(element => {
            element.classList.add('hovered');
        });
    });

    employmentDivsCentr.addEventListener('mouseleave', () => {
      workTextElements.forEach(element => {
            element.classList.remove('hovered');
        });
    });


    const employmentDivsRight = document.getElementById('playground-right-containers');
    const playgroundTextElements = document.querySelectorAll('.playground-text');
    
    employmentDivsRight.addEventListener('mouseenter', () => {
      playgroundTextElements.forEach(element => {
                element.classList.add('hovered');
            });
        });
    
        employmentDivsRight.addEventListener('mouseleave', () => {
          playgroundTextElements.forEach(element => {
                element.classList.remove('hovered');
            });
        });
    









// const headerContainer = document.querySelector('.header-container');

// employmentDivs.forEach(div => {
//   div.addEventListener('mouseenter', () => {
//     headerContainer.classList.add('hovered');
//   });

//   div.addEventListener('mouseleave', () => {
//     headerContainer.classList.remove('hovered');
//   });
// });












// function scrollImagesWork() {
//   var container = document.getElementById('playground-containers'); // Find the container by its ID
//   var images = container.querySelectorAll('.auto-photo'); // Select all images within the container

//   if (images.length > 0) {

//     var sectionElements = container.querySelectorAll('.section-element'); // Select all images within the container

//     for (let i = 0; i < container.children.length; i++) {
//       const sectionElement = sectionElements[i]; // Get the first image

//       let contentClone = sectionElement.cloneNode(true); // Клонировать i-ый элемент
//       container.appendChild(contentClone); // Добавить клон в контейнер
//     }

//     console.log("Image processed and moved to the front.");

//   }
// }

// function scrollImagesPlayGround() {
//   var container = document.getElementById('playground-containers'); // Find the container by its ID
//   var images = container.querySelectorAll('.auto-photo'); // Select all images within the container

//   if (images.length > 0) {

//     var sectionElements = container.querySelectorAll('.section-element'); // Select all images within the container

//     for (let i = 0; i < container.children.length; i++) {
//       const sectionElement = sectionElements[i]; // Get the first image

//       let contentClone = sectionElement.cloneNode(true); // Клонировать i-ый элемент
//       container.appendChild(contentClone); // Добавить клон в контейнер
//     }

//     console.log("Image processed and moved to the front.");

//   }
// }