let i = 1;
x = 8;
y = x;

for (i = x - i; i >= 1; i--) {
  x = x * i;
}
console.log("the factorial of the given number :" + y + " is " + x);
