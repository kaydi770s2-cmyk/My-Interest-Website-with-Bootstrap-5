ทดลองได้ที่นี่ -> [https://kaydi770s2-cmyk.github.io/My-Interest-Website-with-Bootstrap-5/](https://kaydi770s2-cmyk.github.io/My-Interest-Website-with-Bootstrap-5/)

การแยกไฟล์ Modular: เราทำการแยกไฟล์ออกเป็น 3 ส่วนชัดเจนคือ index.html, style.css และ script.js ซึ่งเป็นแนวทางปฏิบัติที่ดี (Best Practice) ทำให้เวลาทำ Git Commit หรือตรวจแก้ประวัติการแก้ไขโค้ด (Version Control) บน GitHub ทำได้ง่ายและไม่สับสนครับ

การตั้งชื่อไฟล์หลัก: เราใช้ชื่อไฟล์หน้าแรกว่า index.html เพื่อให้รองรับกับบริการ GitHub Pages ได้ทันที ทำให้เวลาเรา Push โค้ดขึ้นไปบน Repository แล้วเปิดฟีเจอร์ GitHub Pages ตัวระบบจะดึงไฟล์ index.html นี้ขึ้นมาแสดงผลเป็นหน้าเว็บแบบ Online ได้โดยไม่ต้องตั้งค่าเพิ่มเติมครับ

การอ้างอิง Path: การลิงก์ไฟล์ CSS และ JS ใน HTML เราใช้แบบ Relative Path อยู่ใน Root โฟลเดอร์เดียวกัน ทำให้เมื่อนำไปรันบน Server ของ GitHub หรือเปิดบนเครื่อง local หน้าเว็บก็ยังทำงานได้สมบูรณ์ ตัวเลขส่วน interactive ก็กดเพิ่มได้ตามปกติครับ"
