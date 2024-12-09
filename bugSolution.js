function foo(x) {
  if (x === null || isNaN(x)) {
    return 0; 
  }
  return x + 1; 
}