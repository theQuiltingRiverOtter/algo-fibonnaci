function fibonacci(num) {
  const fib_seq = [0,1];
  if (num === 0){
    return 0;
  } else if (num === 1){
    return 1;
  } else {
    while (fib_seq.length <= num){
      fib_seq.push(fib_seq[fib_seq.length-1] + fib_seq[fib_seq.length-2])
    }
  }
  return fib_seq[fib_seq.length-1]
}


// Recursive version
// function fibonacci(num){
//   if (num === 0){
//     return 0;
//   } else if (num === 1) {
//     return 1
//   } else {
//     return fibonacci(num-1) + fibonacci(num-2);
//   }
// }

console.log(fibonacci(12));
module.exports = fibonacci;
