function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y();
}
x();
// a function bundled with its lexicalenvironment/closures along with its lexical scope Bundled together its known as a closure
