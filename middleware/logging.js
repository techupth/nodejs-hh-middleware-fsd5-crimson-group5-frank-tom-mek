import fs from "fs";

function logging(req, res, next) {
  const logData = `IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}\n`;

  fs.appendFile("data/logs.txt", logData, (err) => {
    if (err) {
      console.error("เกิดข้อผิดพลาดในการเขียนไฟล์:", err);
      // หากเกิดข้อผิดพลาด สามารถเลือกทำอย่างอื่นได้ เช่น ส่ง response error กลับไปหรือดำเนินการต่อไปตามที่เหมาะสม
      return next(err);
    }
    console.log(
      `IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`
    );
    next(); // เรียกฟังก์ชัน next() เพื่อทำงาน middleware ต่อไปใน Express.js เมื่อการเขียนไฟล์เสร็จสิ้นแล้ว
  });
}

export default logging;
