// let book = ['Math', 'Physics', 'Bio', 'computer science'];
// let booklength = book.length;
// for (let i = 0; i < booklength; i++) {
//   console.log(`Element ${i} is ${book[i]} \n`);
// }
// book.forEach((value, index) => console.log(`Element ${index} is ${value} `));
// for (i = 0; i <= 10; i++) {
//   document.write(`2 x ${i}=${2 * i}`);
//   document.write('<br/>');
// }
// document.write('<br><br>');
// function multiplication(num) {
//   for (let i = 0; i <= 10; i++) {
//     document.write(`${num} x ${i}=${2 * i}`);
//     document.write('<br/>');
//   }
//   document.write('<br><br>');
// }
// for (let i = 0; i <= 30; i++) {
//   multiplication(i);
// }

// multiplication(5);

// function addition(num1, num2) {
//   //parameter
//   let sum = num1 + num2;
//   document.write(sum + ' ' + num1 + ' ' + num2);
//   return sum;
// }
// addition(10, 10); //argument

// function add() {
//   console.log(arguments[2]);
// }

// add(10); //argument
// add(10, 10); //argument
// add(10, 20, 30);

// (function () {
//   console.log('Adding');
//   alert('Adding');
// })();

let person = [
  {
    firstName: 'John',
    lastName: 'Kumar'
  },
  { firstName: 'Jyoti', lastName: 'Mahajan' }
];

person.filter(personName => {
  if (personName.firstName === 'John') {
    document.write(personName.firstName);
  }
});
