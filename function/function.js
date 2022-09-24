const argBtn = document.getElementById('argBtn');
const propertyBtn = document.getElementById('propertyBtn');
const closureBtn = document.getElementById('closureBtn');
const counter2Btn = document.getElementById('counter2Btn');

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

function counter() {
  console.log(++counter.count);
}

counter.count = 0;
propertyBtn.addEventListener('click', counter);

let counter_ = function() {
  var count = 0;
  return function() { return ++count; };
}();

// let counter2 = function() {
//   var count = 0;
//   const inc = () => ++count;
//   const dec = () => --count;
//   return {
//     inc,
//     dec
//   }
// }();

let counter2 = function() {
  var count = 0;
  return {
    inc: function() { return ++count;},
    dec: function() { return --count;}
  }
}();

argBtn.addEventListener('click', allFunction);
closureBtn.addEventListener('click', function () {
  console.log(counter_());
  // console.log(count);
});
counter2Btn.addEventListener('click', function () {
  console.log(counter2.inc());
});