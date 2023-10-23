// const os = require('os');
// const cluster  = require('cluster');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// if(cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length; i++) {
//     cluster.fork()
//   }
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Воркер с pid=${worker.process.pid} умер`)
//     if(code) {
//       cluster.fork()
//     } else {
//       console.log('Воркер умер...')
//     }
//   })
// } else {
//   console.log(`Воркер с pid= ${process.pid} запущен`)
//   setInterval(() => {
//     console.log(`Воркер с pid= ${process.pid} еще запущен`)
//   }, 5000)
// }

// const cpus = os.cpus()

// for(let i =0; i < cpus.length -2; i++) {
//   const CPUcors = cpus[1];
//   console.log('запустить еще один NODE JS процесс')
// }
// console.log(process.pid)
