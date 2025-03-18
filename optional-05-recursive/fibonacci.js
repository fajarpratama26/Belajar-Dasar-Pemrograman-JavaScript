// Fungsi untuk menghasilkan deret Fibonacci menggunakan rekursi
function fibonacci(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  const fib = fibonacci(n - 1);
  const nextNumber = fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(nextNumber);
  return fib;
}

export default fibonacci;
