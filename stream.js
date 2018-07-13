const fs = require('fs');

var stream = fs.createReadStream('log.txt');
let reads = 0;
stream.on('data', function(data){
  reads = reads + 1
  console.log(reads)
})

stream.on('end', console.log.bind(null, reads))