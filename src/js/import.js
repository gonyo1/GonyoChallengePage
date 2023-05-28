const body = document.querySelector("body")
const homebutton = document.querySelector(".nav-menuback")

// home button click
function onHomebuttonClick() {
    document.location.href="/vanilla-js";
}

homebutton.addEventListener("click", onHomebuttonClick)
