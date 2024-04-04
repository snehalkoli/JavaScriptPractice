var timer;
let counter = 0;
function magicLogic() {
  clearTimeout(timer);
  timer = setTimeout(function () {
    console.log('magicLogic', counter++);
  }, 300);
}
