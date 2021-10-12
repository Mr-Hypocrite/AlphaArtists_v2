
const cHeading = document.querySelectorAll('.c_heading');
const cBody1 = document.querySelectorAll('.c_body');

cHeading.forEach(cHeading => {
  cHeading.addEventListener('click', event => {
    cHeading.classList.toggle('active');
    const cBody = cHeading.nextElementSibling;
    if (cHeading.classList.contains('active')) {
      cBody.style.maxHeight = cBody.scrollHeight + 'px';
    } else {
      cBody.style.maxHeight = 0;
    }
  });
});

// VideoPlayer
var videoPlayer = document.getElementById('videoPlayer');
var myVideo = document.getElementById('myVideo');

function stopVideo() {
  videoPlayer.style.display = 'none';
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = 'block';
}

// VideoPlayer

// Portfolio

const c_modal= document.querySelector(".c_modal");
const preview= document.querySelectorAll(".gallery img");
const full= document.querySelector(".gallery-full");
const original= document.querySelector(".full-image");
const caption= document.querySelector(".caption");

preview.forEach( preview => {
  preview.addEventListener("click", () => {
    c_modal.classList.add("open");
    full.classList.add("pop");
    // change text and img
    const originalSrc = preview.getAttribute('src');
    original.src= `${originalSrc}`;
    console.log(originalSrc);
    const altText= preview.alt;
    caption.textContent=altText;
  })
});

c_modal.addEventListener("click", (e) => {
  if(e.target.classList.contains("c_modal")){
    c_modal.classList.remove("open");
    full.classList.remove("pop");
  }
});

// Portfolio Ends
