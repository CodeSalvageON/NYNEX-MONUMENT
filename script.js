const loadingScreen = document.getElementById("loading-screen");

let loadingTime = 0;

setInterval(function () {
  switch (loadingTime) {
    case 0:
      loadingScreen.innerText = "Loading.";
      loadingTime = 1;
      break;
    case 1:
      loadingScreen.innerText = "Loading..";
      loadingTime = 2;
      break;
    case 2:
      loadingScreen.innerText = "Loading...";
      loadingTime = 0;
      break;
  }
}, 300);