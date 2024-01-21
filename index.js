// for color change 
const control = document.querySelector('.control');


window.addEventListener('scroll', ()=>{
  control.classList.remove('open')
})

const widget = document.querySelector('.widget');

widget.addEventListener('click', ()=>{
  control.classList.toggle('open')
})

const colors = [...document.querySelectorAll('.colors span')];
document.querySelector(':root').style.setProperty('--customColor','#ce00ff')


colors.forEach(color=>{
  color.addEventListener('click', ()=>{
    const currentColor = color.dataset.id;
    document.querySelector(':root').style.setProperty('--customColor',currentColor)

  })
})

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

const displayTab = (tabName) => {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Coder", { delay: 400 })
  .pause(500)
  .delete(5)
  .type("Competitive Programmer", { delay: 400 })
  .pause(500)
  .delete(22)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Fast Learner", { delay: 400 })
  .pause(500)
  .delete(12)
  .go();

const glide = document.querySelector(".glide");

if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "linear",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();

var sidemenu = document.getElementById("sidemenu");
const openMenu = () => {
  sidemenu.style.right = "0";
};

const closeMenu = () => {
  sidemenu.style.right = "-200px";
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzLC6CtH3fWwWaWfZhZ96Kru0fqezr54HQRQcR8oIr2SB4gNhFRLUugdsBjEVMP9sk_/exec";
const form = document.forms["submit-to-google-sheet"];
const successMsg = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      successMsg.innerHTML = "Message Sent Successfully.🥳";
      setTimeout(() => {
        successMsg.innerText = "";
      }, 50000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
