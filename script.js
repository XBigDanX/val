// Get references to key elements
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const message = document.getElementById("message");
const cardBody = document.querySelector(".card-body");
const mainImg = document.getElementById("main-img"); // Reference to the main image

/**
 * Calculate a safe zone inside the card-body so that the "No" button remains fully visible.
 */
function getSafeZone() {
  const rect = cardBody.getBoundingClientRect();
  const padding = 20; // Padding from the edges of the card-body
  return {
    minX: padding,
    maxX: rect.width - noBtn.offsetWidth - padding,
    minY: padding,
    maxY: rect.height - noBtn.offsetHeight - padding,
  };
}

/**
 * Get a random (x, y) position within the safe zone.
 */
function getRandomPosition() {
  const safeZone = getSafeZone();
  const x = Math.random() * (safeZone.maxX - safeZone.minX) + safeZone.minX;
  const y = Math.random() * (safeZone.maxY - safeZone.minY) + safeZone.minY;
  return { x, y };
}

/**
 * Moves the "No" button to a random safe position inside the card-body.
 */
function moveNoButton() {
  const pos = getRandomPosition();
  noBtn.style.left = `${pos.x}px`;
  noBtn.style.top = `${pos.y}px`;
}

// Desktop: move the "No" button on hover
noBtn.addEventListener("mouseover", function () {
  if (window.innerWidth > 768) {
    moveNoButton();
  }
});

// Mobile: move the "No" button on click
noBtn.addEventListener("click", function () {
  if (window.innerWidth <= 768) {
    moveNoButton();
  }
});

// "Yes" button will change the image to 4.png and show the message
yesBtn.addEventListener("click", function () {
  // Change the image to 4.png
  mainImg.src = "4.png"; // Change this image as required
  message.textContent = "Finally! I knew this would happen!";
});
