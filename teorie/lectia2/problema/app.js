import {getTime} from "./clock.js";

const clock = document.querySelector(".clock");

setInterval(() => {
    let [h, m, s] = getTime();
    clock.textContent = `${h}:${m}:${s}`;
    console.log(s);
}, 1000);