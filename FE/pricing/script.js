"use strict";

let check = 0;

const btnCheck = document.querySelector(".check-button");
const mark = document.querySelector('.alahly');

btnCheck.addEventListener("click", function () {
    check = check === 0 ? 1 : 0;
    if (check === 0) {
        document.querySelector(".h4j").textContent =
            "Have Access To Your Personal Mentor Ai";
        document.querySelector(".l5j").textContent = "5 Teams";
        document.querySelector(".s6j").textContent = "$10";
        mark.style.display = 'none';

    } else {
        document.querySelector(".h4j").textContent =
            "Have Access To Your Personal Mentor Ai, \n Powered By Open AI";
        document.querySelector(".l5j").textContent = "Access To Our Mentor AI";
        document.querySelector(".s6j").textContent = "$8";
        mark.style.display = 'inline';
    }
});