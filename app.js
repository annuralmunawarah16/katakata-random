const express = require('express');
const app = express();
const port = 3000;

// Array kutipan absurd
const kutipan = [
    "Jangan menunda mimpi. Kecuali mimpinya jadi ikan lele yang bisa coding.",
    "Kopi pertama menentukan mood. Kopi kedua menentukan nasib.",
    "Hidup tidak perlu jelas, yang penting absurd tapi konsisten.",
    "Mohon tidak memberi motivasi pada mesin fotokopi. Dia sudah cukup percaya diri.",
    "Bahkan tisu pun bisa multitasking: menghapus air mata dan bekas sambal.",
    "Jangan bertengkar dengan Excel. Dia tahu apa yang kamu lakukan kemarin.",
    "Saat kamu merasa gagal, ingatlah... bahkan printer pun sering minta restart.",
    "Tidak semua yang menghilang itu error. Kadang cuma lagi butuh waktu menyendiri.",
    "Burung hantu begadang karena deadline, bukan karena bijak.",
    "Lele pun bisa tenang di air keruh, masa kamu nggak bisa?"
];

// Array emoji acak
const emojis = [
 "⚠️", "🖨️", "🧠", "🐟", "💻", "🌌", "🤧", "📩", "🌐", "🧘‍♂️", "💸", "🫠", "🌿", "🚫", "🧘‍♀️", "📊", "👀", "📅", "🚽", "📹", "💨"
];

// Siapkan templat HTML
const createMemePage = (quote, emoji, nama, asalSekolah, jurusan, kelas) => `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meme Motivasi Absurd</title>
  <style>
    body { 
      background-color: #ff9966; 
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      flex-direction: column;
    }
    .meme-container {
      background: linear-gradient(45deg, #ff6b6b, #5f27cd);
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
      text-align: center;
      max-width: 500px;
    }
    .quote { 
      font-size: 24px; 
      color: white;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .emoji { font-size: 70px; }
    button {
      margin-top: 40px;
      padding: 12px 24px;
      background-color: #6c5ce7;
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:hover { transform: scale(1.05); }
  </style>
</head>
<body>
  <div class="meme-container">
    <div class="quote">"${quote}"</div>
    <div class="emoji">${emoji}</div>
    <div class="nama">- ${nama}</div>
    <div class="asal-sekolah">- ${asalSekolah}</div>
    <div class="jurusan">- ${jurusan}</div>
    <div class="kelas">- ${kelas}</div>
  </div>
  <button onclick="window.location.reload()">Meme Baru!</button>
</body>
</html>
`;

// Route untuk halaman utama
app.get('/', (req, res) => {
  const randomQuote = kutipan[Math.floor(Math.random() * kutipan.length)];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const nama = "Annur Al Munawarah";
  const asalSekolah = "SMKN 1 Maros";
  const jurusan = "XI TKJ A";
  const kelas = "X_1S1PA";
  
  res.send(createMemePage(randomQuote, randomEmoji, nama, asalSekolah, jurusan, kelas));
});

// Mulai server
app.listen(port, () => {
    console.log(`Aplikasi meme absurd berjalan di http://localhost:${port}`);
});