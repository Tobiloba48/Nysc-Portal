const login = document.getElementById("login");

const backgroundImages = [
  'url("/Assets/Images/nysc1.jpg")',
  'url("/Assets/Images/nysc2.jpg")',
];

let currentIndex = 0;
function changeBackgroundImage() {
  login.style.backgroundImage = backgroundImages[currentIndex];
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

setInterval(changeBackgroundImage,2000)

