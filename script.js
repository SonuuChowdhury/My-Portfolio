const githubLink = document.querySelector(".github-Link");
const instaLink = document.querySelector(".insta-Link");
const XLink = document.querySelector(".X-Link");
const linkedinLink = document.querySelector(".linkedin-Link");
const gitTTT = document.querySelector(".gitTTT");
const gitAmazon = document.querySelector(".gitAmazon");
const gitDC = document.querySelector(".gitDC");
const DgitTTT = document.querySelector(".DgitTTT");
const DgitAmazon = document.querySelector(".DgitAmazon");
const DgitDC = document.querySelector(".DgitDC");

githubLink.addEventListener("click", () => {
  window.open("https://github.com/SonuuChowdhury/");
});
instaLink.addEventListener("click", () => {
  window.open("https://www.instagram.com/sonuu.chowdhury/");
});
XLink.addEventListener("click", () => {
  window.open("https://x.com/SonuuChowdhury");
});
linkedinLink.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/sonu-chowdhury-5378612b2/");
});

gitTTT.addEventListener("click", () => {
  window.open("https://github.com/SonuuChowdhury/Tic-Tac-Toe-Game");
});
gitAmazon.addEventListener("click", () => {
  window.open("https://github.com/SonuuChowdhury/Amazon-Clone");
});
gitDC.addEventListener("click", () => {
  window.open("https://github.com/SonuuChowdhury/Digital-Calculator");
});

DgitTTT.addEventListener("click", () => {
  window.open("https://sonuuchowdhury.github.io/Tic-Tac-Toe-Game/");
});
DgitAmazon.addEventListener("click", () => {
  window.open("https://sonuuchowdhury.github.io/Amazon-Clone/");
});
DgitDC.addEventListener("click", () => {
  window.open("https://sonuuchowdhury.github.io/Digital-Calculator/");
});

function sendMail() {
    console.log("Calling");
    emailjs.send("service_q14i7pc", "template_rwx0x8y", {
      from_name: `${document.querySelector(".firstNameInput").value} ${document.querySelector(".lastNameInput").value}`,
      email_id: document.querySelector(".emailInput").value,
      message: document.querySelector(".messgaeInput").value,
    }).then(() => {
      alert("Form Submitted.");
    }).catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Form submission failed.");
    });
  }

const submitFormButton = document.querySelector(".submitFormButton");
submitFormButton.addEventListener("click", (event) => {
    event.preventDefault();
    sendMail();
  });
