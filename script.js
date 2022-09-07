const loadingScreen = document.getElementById("loading-screen");

let loadingTime = 0;

const sback = document.getElementById("sback");

const seasons = document.getElementById("seasons");

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

waitForElement("#main", 3000).then(function () {
  fade("loading-screen");

  loadBack("autumn.jpg");

  setTimeout(function () {
    unfade("main");
  }, 3000);
}).catch(() => {
  console.log("Error: did not load!");
});

seasons.onclick = function () {
  fade("main");
  loadBack("heaven.jpg")

  setTimeout(function () {
    unfade("seasy");
  }, 3000);
}

sback.onclick = function () {
  fade("seasy");
  loadBack("autumn.jpg");

  setTimeout(function () {
    unfade("main");
  }, 3000);
}