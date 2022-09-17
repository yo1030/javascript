const pushBtn = document.getElementById('pushBtn');
const pushBtn2 = document.getElementById('pushBtn2');
const pushArrBtn = document.getElementById('pushArrBtn');
const popBtn = document.getElementById('popBtn');
const unshiftBtn = document.getElementById('unshiftBtn');
const unshiftBtn2 = document.getElementById('unshiftBtn2');
const shiftBtn = document.getElementById('shiftBtn');
const shiftBtn2 = document.getElementById('shiftBtn2');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var stack = [];
var stack1 = [];
var stack2 = [];
const pushNum = ((num) => {
  stack.push(num);
});
const pushNum2 = ((num) => {
  stack2.push(num);
});
const pushArr = (() => {
  (stack.length === 0) ? stack.push(100) : stack.push(stack);
});
const unshiftNum = ((num) => {
  stack1.unshift(num);
});
const unshiftTwoNum = ((num1, num2) => {
  stack1.unshift(num1, num2);
});
const pushLog = (() => {
  const randumInt = getRandomInt(10);
  pushNum(randumInt);
  console.log(stack);
});
const pushArrLog = (() => {
  pushArr();
  console.log(stack);
});
const popLog = (() => {
  console.log(stack.pop());
  console.log(stack);
});
const unshiftLog = (() => {
  const randumInt = getRandomInt(9);
  unshiftNum(randumInt);
  console.log(stack1);
});
const unshiftLog2 = (() => {
  const randumInt = getRandomInt(9);
  const randumInt2 = getRandomInt(9);
  console.log(`num1:${randumInt} / num2:${randumInt2}`);
  unshiftTwoNum(randumInt, randumInt2);
  console.log(stack1);
});
const shiftLog = (() => {
  console.log(stack1.shift());
  console.log(stack1);
});
const pushLog2 = (() => {
  const randumInt = getRandomInt(10);
  pushNum2(randumInt);
  console.log(stack2);
});
const shiftLog2 = (() => {
  console.log(stack2.shift());
  console.log(stack2);
});
pushBtn.addEventListener('click', pushLog);
pushArrBtn.addEventListener('click', pushArrLog);
popBtn.addEventListener('click', popLog);
unshiftBtn.addEventListener('click', unshiftLog);
unshiftBtn2.addEventListener('click', unshiftLog2);
shiftBtn.addEventListener('click', shiftLog);
pushBtn2.addEventListener('click', pushLog2);
shiftBtn2.addEventListener('click', shiftLog2);