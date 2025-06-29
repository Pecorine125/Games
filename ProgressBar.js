let progress = 0;
const progressBar = document.getElementById("progress-bar");

const loading = setInterval(() => {
  progress++;
  progressBar.style.width = progress + "%";
  progressBar.textContent = progress + "%";
  if (progress >= 100) {
    clearInterval(loading);
    window.location.href = "Login.html";
  }
}, 50);
