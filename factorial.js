let i = 1;
x = 8;
y = x;

for (i = x - 1; i >= 1; i--) {
  x = x * i;
}
console.log("the factorial of the given number :" + y + " is " + x);
