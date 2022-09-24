const joinBtn = document.getElementById('joinBtn');
const toStrBtn = document.getElementById('toStringBtn');
const toLocaleStrBtn = document.getElementById('toLocaleStringBtn');
const joinLog = (() => {
  const arr = makeArr(10);
  const result = arr.join();
  const result1 = arr.join(" ");
  const result2 = arr.join("");
  console.log(arr);
  console.log(result);
  console.log(result1);
  console.log(result2);
});
const toStrLog = (() => {
  const arr = makeArr(10);
  const nestArr = [1,[2,[3,4],5]];
  const result = arr.toString();
  const nestResult = nestArr.toString();
  console.log(arr);
  console.log(result);
  console.log(nestArr);
  console.log(nestResult);
});
const toLocaleStrLog = (() => {
  const date1 = new Date(2020, 11, 20, 3, 23, 16, 738);
  const num = 123456.789;
  const arr = [date1, num];
  const result = arr.toLocaleString();
  const result1 = arr.toLocaleString('en-US');
  const result2 = arr.toLocaleString('pt-PT');
  console.log(arr);
  console.log(result);
  console.log(result1);
  console.log(result2);
});

const makeArr = (num => {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr[i] = i;
  }
  return arr;
});

joinBtn.addEventListener('click', joinLog);
toStrBtn.addEventListener('click', toStrLog);
toLocaleStrBtn.addEventListener('click', toLocaleStrLog);