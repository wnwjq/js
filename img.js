const imgs = [
    "a.jpg",
    "b.jpg",
    "c.jpg",
    "d.jpg",
    "e.jpg",
    "f.jpg",
    "g.jpg",
    "h.png",
]
const mainBackground = document.querySelector(".main-background");
const img = document.createElement("img");

function interval() {
    const randomImgs = imgs[Math.floor(Math.random() * imgs.length)];
    img.style.width = "100%";
    img.style.height = "100%";
    img.src = `img/${randomImgs}`;
}
setTimeout(interval, 1);
setInterval(interval, 5000);




mainBackground.append(img);

