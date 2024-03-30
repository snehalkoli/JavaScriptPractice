getName();
console.log(x);
console.log(getName);
var x = 7;
function getName() {
  console.log('Namaste India');
}
console.log(getName);
// undefined and not defined are different
// hoisting is a phenomenon in javascript by which we can access the variable and functions even before you have initialised it or you can put some value in it or we can access it without any error
// even before this code has executed javascript has reserved this memory for x and place the special plaholder undefined to it

// suppose we have a arrow function
console.log('arrow function', arrowFunction());
var arrowFunction = () => {
  console.log('arrowFunction');
};
