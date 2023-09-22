setTimeout(() => {
  console.log("Working!");
}, 1000);

// Indian Standard Time

const IST = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
const timeSpan = document.getElementById("time");

setInterval(() => {
  const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  timeSpan.textContent = now;
}, 1000);

// Modal

const triggerMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("closeMenu");

triggerMenu.addEventListener("click", () => {
  document.getElementById("menuModal").classList.add("visible");
});

closeMenu.addEventListener("click", () => {
  document.getElementById("menuModal").classList.remove("visible");
});

// Set salaries to local storage

const monthly = document.getElementById("monthlySalary");
const annual = document.getElementById("annualSalary");

const setMonthly = () => {
  localStorage.setItem("monthly", monthly.value);
};

monthly.addEventListener("change", setMonthly);
setInterval(() => {
  if (localStorage.getItem("monthly")) {
    monthly.value = localStorage.getItem("monthly");
  }
}, 3000);

const setAnnual = () => {
  localStorage.setItem("annual", annual.value);
};

annual.addEventListener("change", setAnnual);
setInterval(() => {
  if (localStorage.getItem("annual")) {
    annual.value = localStorage.getItem("annual");
  }
}, 3000);

// toggles

const annualToggle = document.getElementById("annual");
const monthlyToggle = document.getElementById("monthly");


annualToggle.addEventListener("click", ()=> {
    localStorage.setItem("toggle", "annual");
});
monthlyToggle.addEventListener("click", ()=> {
    localStorage.setItem("toggle", "monthly");
});

// Currency

const currency = document.getElementById("currency");

currency.addEventListener("change", () => {
    localStorage.setItem("currency", currency.value);
    });
