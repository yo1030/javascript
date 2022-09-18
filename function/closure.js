const closure2Btn = document.getElementById('closure2Btn');

function create(x) {
  return () => x;
}

let arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = create(i);
}

let x = function createFuncs() {
  let arr_ = [];
  for (var i = 0; i < 10; i++) {
    arr_[i] = () => i;
  }
  return arr_;
}();
console.log(arr[4]());
console.log(x[6]());