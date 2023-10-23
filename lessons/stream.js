// Readable - чтение
// Writeble - Запись 
// Duplex - Для чтения и записи Readable + Writeble
// Transform - Такой же как Duplex, но может изменить данные по мере чтения

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data)
// })


//один чанк по дефолту 64кб!
// const stream = fs.createReadStream(path.resolve(__dirname, 'tet.txt'))
// stream.on('data', (chunk) => {
//   console.log(chunk)
// })
// stream.on('end', () => console.log('Закончить читать'))
// stream.on('open', () => console.log('Начать читать'))
// stream.on('error', (e) => console.log(e))
// const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'), {encoding:'utf-8'})

// const writebleStream = fs.createWriteStream(path.resolve(__dirname, 'text.txt'))
// for (let i = 0; i < 20; i++) {
//   writebleStream.write(i + '\n');
// }
// writebleStream.end()

// const http  = require('http');

// http.createServer((req,res) => {
//   const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
  
//   // req- readeble stream
//   // res - writeble stream
//   //Стрим закончит читать раньше, чем пользователь скачает
//   stream.pipe(res)
//   // stream.on('data', chunk => res.write(chunk))
//   // stream.on('end', chunk => res.end())

// })