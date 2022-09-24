const bindBtn = document.getElementById('bindBtn');
const obj = {
  name: 'name',
  value: 10
};

function f(x, y) {
  console.log(this);
  console.log(x);
  console.log(y);
}

function bindFunction() {
  f();
  f(2, 6);
  let newF = f.bind(obj, 'new1', 'new2');
  newF();
  newF(10, 50);
}

bindBtn.addEventListener('click', bindFunction);