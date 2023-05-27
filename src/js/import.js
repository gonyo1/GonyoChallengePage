const body = document.querySelector("body")
const homebutton = document.querySelector(".nav-menuback")

// home button click
function onHomebuttonClick() {
    document.location.href="/";
}

homebutton.addEventListener("click", onHomebuttonClick)
