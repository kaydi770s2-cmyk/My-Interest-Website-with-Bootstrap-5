// ดึง Element จาก DOM
const startBtn = document.getElementById('startBtn');
const addUsersBtn = document.getElementById('addUsersBtn');
const countDisplay = document.getElementById('count-display');

let userCount = 1000000;
// เหตุการณ์เมื่อกดปุ่ม "เพิ่มจำนวนผู้ใช้"
if (addUsersBtn && countDisplay) {
    addUsersBtn.addEventListener('click', () => {
        userCount += 500000;
        countDisplay.innerText = userCount.toLocaleString();
    });
}

// เหตุการณ์เมื่อกดปุ่ม "เริ่มต้นใช้งาน"
startBtn.addEventListener('click', () => {
    alert('ยินดีต้อนรับเข้าสู่โลกแห่งเทคโนโลยีอนาคต!');
});


