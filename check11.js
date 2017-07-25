console.log ('Input some code:');
//process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.once('data', function (someCode) {
    process.stdin.pause();
   

let c=someCode.split('');
let d=c.sort();
console.log(d.join(''));

  
});


