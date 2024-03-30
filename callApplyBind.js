let name1 = {
  firstname: 'Snehal',
  lasname: 'Koli'
  // printFullName: function () {
  //   console.log(this.firstname + ' ' + this.lasname);
  // }
};

let printFullName = function (hometown, state) {
  console.log(this.firstname + ' ' + this.lasname + 'from' + hometown + '');
};
// printFullName.call(name1, 'Sangli', 'Maharashtra');
// name1.printFullName();
let name2 = {
  firstname: 'Sachin',
  lastname: 'Tendulkar'
};

//function borrowing
// name1.printFullName.call(name2, 'Sangli', 'Maharashtra');
name1.printFullName.apply(name2, ['Sangli', 'Maharashtra']);

let printMyName = printFullName.bind(name2, 'Mumbai', 'Maharashtra');
console.log('snehal', printMyName);
printMyName();
