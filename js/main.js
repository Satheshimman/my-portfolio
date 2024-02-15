// var typed = new Typed(".text",{

// 	strings:["Frontend Devoloper","Web Devoloper"],
// 	typeSpeed:100,
// 	backSpeed: 100,
// 	backDelay: 1000,
// 	loop: true

// });
const header = document.getElementById("sec-1");
const side = document.querySelector(".side-header");
side.style.top = header.offsetHeight + "px";
const sidebar = document.getElementById("side");
const sec1 = document.getElementById("section-1");
const sec2 = document.getElementById("section-2");
const sec3 = document.getElementById("section-3");
const sec4 = document.getElementById("section-4");
const sec5 = document.getElementById("section-5");
const sec6 = document.getElementById("section-6");

function homee() {
  side.classList.add("d-none");
  sec1.classList.remove("d-none");
  sec1.classList.add("show");
  sec2.classList.add("d-none");
  sec3.classList.add("d-none");
  sec4.classList.add("d-none");
  sec5.classList.add("d-none");
  sec6.classList.add("d-none");
}

function aboutt() {
  side.classList.add("d-none");
  sec2.classList.remove("d-none");
  sec2.classList.add("show");
  sec1.classList.add("d-none");
  sec3.classList.add("d-none");
  sec4.classList.add("d-none");
  sec5.classList.add("d-none");
  sec6.classList.add("d-none");
}

function educationn() {
  side.classList.add("d-none");
  sec3.classList.remove("d-none");
  sec3.classList.add("show");
  sec1.classList.add("d-none");
  sec2.classList.add("d-none");
  sec4.classList.add("d-none");
  sec5.classList.add("d-none");
  sec6.classList.add("d-none");
}

function skillss() {
  console.log("asda");
  side.classList.add("d-none");
  sec4.classList.remove("d-none");
  sec4.classList.add("show");
  sec1.classList.add("d-none");
  sec2.classList.add("d-none");
  sec3.classList.add("d-none");
  sec5.classList.add("d-none");
  sec6.classList.add("d-none");
}

function projectss() {
  side.classList.add("d-none");
  sec5.classList.remove("d-none");
  sec5.classList.add("show");
  sec1.classList.add("d-none");
  sec2.classList.add("d-none");
  sec4.classList.add("d-none");
  sec3.classList.add("d-none");
  sec6.classList.add("d-none");
}

function contacts() {
  side.classList.add("d-none");
  sec6.classList.remove("d-none");
  sec6.classList.add("show");
  sec1.classList.add("d-none");
  sec2.classList.add("d-none");
  sec4.classList.add("d-none");
  sec3.classList.add("d-none");
  sec5.classList.add("d-none");
}

let count = 0;

function about() {
  count++;
  sec2.classList.remove("d-none");
  sec2.classList.add("show");
  sec4.classList.add("d-none");
  sec5.classList.add("d-none");
  sec3.classList.add("d-none");
  sec1.classList.add("d-none", "d-lg-none");
  sec6.classList.add("d-none");
}

function home() {
  if (count > 0) {
    sec1.classList.remove("d-none", "d-lg-none");
    sec1.classList.add("show");
    sec2.classList.add("d-none");
    sec3.classList.add("d-none");
    sec4.classList.add("d-none");
    sec5.classList.add("d-none");
    sec6.classList.add("d-none");
  }
}

function education() {
  count++;
  sec3.classList.remove("d-none");
  sec3.classList.add("show");
  sec2.classList.add("d-none");
  sec1.classList.add("d-none", "d-lg-none");
  sec4.classList.add("d-none");
  sec5.classList.add("d-none");
  sec6.classList.add("d-none");
}

function skills() {
  count++;
  sec4.classList.remove("d-none");
  sec4.classList.add("show");
  sec1.classList.add("d-none", "d-lg-none");
  sec2.classList.add("d-none");
  sec3.classList.add("d-none");
  sec5.classList.add("d-none");
  sec6.classList.add("d-none");
}

function project() {
  count++;
  sec5.classList.remove("d-none");
  sec5.classList.add("show");
  sec1.classList.add("d-none", "d-lg-none");
  sec2.classList.add("d-none");
  sec3.classList.add("d-none");
  sec4.classList.add("d-none");
  sec6.classList.add("d-none");
}

function contact() {
  count++;
  sec6.classList.remove("d-none");
  sec6.classList.add("show");
  sec1.classList.add("d-none", "d-lg-none");
  sec2.classList.add("d-none");
  sec3.classList.add("d-none");
  sec4.classList.add("d-none");
  sec5.classList.add("d-none");
}
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.classList.remove("d-none");
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

const rain = document.getElementById("rainclass");
const rainanimation = document.querySelector(".rainanimation");
const sathi = rainanimation.offsetWidth;
setInterval(() => {
  const a = document.createElement("div");
  a.setAttribute("class", "raineffect bi bi-circle");
  rainanimation.append(a);
  const random = Math.floor(Math.random() * sathi);
  const ani = Math.floor(Math.random() * 2);
  a.style.animationDuration = 2 + ani + "s";
  a.style.left = random + "px";
  setTimeout(() => {
    a.remove();
  }, 5000);
}, 150);
