// ดึง Element จาก DOM
const startBtn = document.getElementById('startBtn');
const addUsersBtn = document.getElementById('addUsersBtn');
const countDisplay = document.getElementById('count-display');

let userCount = 1000000;

if (addUsersBtn && countDisplay) {
    addUsersBtn.addEventListener('click', () => {
        userCount += 500000;
        countDisplay.innerText = userCount.toLocaleString();
    });
}