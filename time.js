window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function scrollToTop() {
    window.scroll({
      top: 0, 
      behavior: "smooth",
    });
}

function displayRealTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const timeString = hours + ":" + minutes + ":" + seconds;
  
  const timeElement = document.getElementById("realTime");
  timeElement.textContent = timeString;
}

setInterval(displayRealTime, 1000);

displayRealTime();