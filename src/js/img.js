const files = Array.from({length:7}, (_,i) => `${i}.jpg`);

var imagefile = files[Math.floor(Math.random() * files.length)]

body.style.backgroundImage = `url("src/img/${imagefile}")`
body.style.height = "100vh";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
