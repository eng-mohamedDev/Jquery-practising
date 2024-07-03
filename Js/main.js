/// <reference types="../@types/jquery/" />

$("#openBtn").on("click", function () {
  $("#sideBar").animate(
    {
      left: "0px",
    },
    1000
  );
});

$("#closeBtn").on("click", function () {
  $("#sideBar").animate(
    {
      left: "-100%",
    },
    1000
  );
});

$(".content-wrapper h2").on("click", function (e) {
  $(".content-wrapper p").slideUp(1000);
  if ($(e.target).next().css("display") == "none") {
    $(e.target).next().slideDown(1000);
  } else {
    $(e.target).next().slideUp(1000);
  }
});

// Timer Section
const countDownDate = new Date("Oct 25, 2024 15:37:25").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + " D";

  document.getElementById("hours").innerHTML = hours + " H";

  document.getElementById("minutes").innerHTML = minutes + " M";

  document.getElementById("seconds").innerHTML = seconds + " S";

  // If the count down is over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

let count = 100;

counter.innerText = count;

msgBox.addEventListener("keyup", function (e) {
  console.log(e.target.value.length);
  if (e.target.value.length > count) {
    counter.innerText = "your available character finished";
  } else {
    count--;
    counter.innerText = count;
  }
});
