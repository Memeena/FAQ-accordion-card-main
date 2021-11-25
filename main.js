"use strict";

const arrowImg = document.querySelectorAll(".arrow-img");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

const resetQuestions = function (val) {
  arrowImg[val].classList.remove("arrow-on-click");
  answer[val].style.display = "none";
  question[val].style.fontWeight = "400";
  question[val].style.borderBottom = "2px solid hsl(240, 5%, 91%)";
};

const displayAnswer = function (val) {
  arrowImg[val].classList.add("arrow-on-click");
  answer[val].style.display = "block";
  question[val].style.fontWeight = "700";
  question[val].style.border = "none";
};

for (let i = 0; i < arrowImg.length; i++) {
  question[i].addEventListener("click", function () {
    if (arrowImg[i].classList.contains("arrow-on-click")) {
      //When the question is already opened,by clicking on the event, it closes
      resetQuestions(i);
    } else {
      for (let j = 0; j < arrowImg.length; j++) {
        //To close all the other answers
        resetQuestions(j);
      }
      //To display the answer
      displayAnswer(i);
    }
  });
}
