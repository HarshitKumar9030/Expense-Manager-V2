setTimeout(()=> {
    console.log('Working!')
}, 1000)

// Indian Standard Time

const IST = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
const timeSpan = document.getElementById('time');

setInterval(() => {
    const now = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    timeSpan.textContent = now;
}, 1000);

// Modal

const triggerMenu = document.getElementById('menu-open');
const closeMenu = document.getElementById('closeMenu');

triggerMenu.addEventListener('click', () => {
    document.getElementById('menuModal').classList.add('visible');
});

closeMenu.addEventListener('click', () => {
    document.getElementById('menuModal').classList.remove('visible');
});