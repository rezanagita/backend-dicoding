const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

// Gunakan hasil dari path.resolve untuk mendapatkan jalur absolut
const filePath = path.resolve(__dirname, 'notes.txt');

// Membaca file dengan jalur absolut
fs.readFile(filePath, 'UTF-8', fileReadCallback);
