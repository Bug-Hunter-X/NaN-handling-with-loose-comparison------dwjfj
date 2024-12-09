function foo(x) {
  if (x == null) {
    return 0; // This line is wrong for the case where x is NaN
  }
  return x + 1; 
}