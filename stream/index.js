const path = require('path');
const fs = require('fs');

const filePath = path.resolve(__dirname, 'input.txt'); // Atur jalur ke file
const readableStream = fs.createReadStream(filePath, {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('output.txt');

readableStream.on('readable', () => {
    try {
        let chunk;
        while (null !== (chunk = readableStream.read())) {
            process.stdout.write(`[${chunk}]`);
        }
    } catch (error) {
        console.error('Error while reading:', error);
    }
});

readableStream.on('end', () => {
    console.log('\nDone');
});




writableStream.write('lorem ipsum dol\n');
writableStream.write('or sit amet,co\n');
writableStream.write('Hai reza nagita\n');
writableStream.end('wess!');