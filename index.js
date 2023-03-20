const fs = require('fs');

// const readableStream = fs.createReadStream('./article.txt', {
//     highWaterMark: 10
// });

// readableStream.on('readable', () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch (error) {
//         //
//     }
// });

// readableStream.on('end', () => {
//     console.log('Done');
// });

const writableStream = fs.createWriteStream('output.txt');

writableStream('Ini merupakan teks baris pertama!\n');
writableStream('Ini merupakan baris kedua!\n');
writableStream.end('Akhir dari writable stream!');