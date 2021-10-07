
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
