const mainCard = document.getElementById("rating");
const thanksCard = document.getElementById("thanks");
const subButton = document.querySelector(".submit");
const resultRate = document.getElementById("ratingNum");
const userRates = document.querySelectorAll(".btn");

userRates.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
    subButton.addEventListener("click", () => {
      thanksCard.style.display = "block";
      mainCard.style.display = "none";
      resultRate.innerHTML = btn.innerHTML;
    });
  });
});
