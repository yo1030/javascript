const argBtn = document.getElementById('argBtn');

function omitParam( x, y) {
  if (y === undefined) y = 5;
  console.log(x + y);
}
function defaultFunc( x, y = 5) {
  console.log(x + y);
}
function defFunc(x, y = x*2) {
  console.log(x + y);
}
function restFunc(first, ...rest) {
  console.log(first);
  console.log(rest);
}
function spredOperator() {
  console.log(arguments);
}
function splitAssign({x, y}, scaller) {
  return {
    x: x*scaller,
    y: y*scaller
  }
}
function allFunction() {
  const arr = [1,2,3,4,5,6,7,8,9,10];
  omitParam(2);
  defaultFunc(3);
  defaultFunc(3, 2);
  defFunc(2);
  defFunc(2, 5);
  restFunc(...arr);
  spredOperator(...arr);
  console.log(splitAssign({x:2, y:3}, 100));
}

argBtn.addEventListener('click', allFunction);