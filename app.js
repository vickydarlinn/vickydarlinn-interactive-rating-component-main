"use strict";
const ratingNum = document.querySelectorAll(".rating_btn");
const submitBtn = document.querySelector(".submit");
const ratingText = document.querySelector(".result");
const ratingDiv = document.querySelector(".rating");
const thankyouDiv = document.querySelector(".thankyou");

let star;
ratingNum.forEach(function (num, i) {
  num.addEventListener("click", function () {
    for (let rate of ratingNum) {
      if (rate.classList.contains("active")) {
        rate.classList.remove("active");
      }
    }
    num.classList.add("active");
    star = i + 1;
  });
});
submitBtn.addEventListener("click", function () {
  if (!star) {
    alert("please select any rating");
  } else {
    ratingDiv.classList.add("hiddenDisplay");
    thankyouDiv.classList.remove("hiddenDisplay");
    ratingText.textContent = `${star}`;
  }
});
