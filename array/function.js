const sampleArr = document.getElementsByName('sampleArr');
const numArr = [ 1, 2, 3, 4, 5];
const numArrEmpty = [ 1, 2,, 4, 5];
const stringArr = ["a", "b", "c", "d", "e"];
const forEachBtn = document.getElementById('forEachBtn');
const mapBtn = document.getElementById('mapBtn');
const filterBtn = document.getElementById('filterBtn');
const findBtn = document.getElementById('findBtn');
const findIdxBtn = document.getElementById('findIdxBtn');
const everyBtn = document.getElementById('everyBtn');
const someBtn = document.getElementById('someBtn');
const reduceBtn = document.getElementById('reduceBtn');
const reduceRightBtn = document.getElementById('reduceRightBtn');
const flatBtn = document.getElementById('flatBtn');
const flatMapBtn = document.getElementById('flatMapBtn');
let sum = 0;

const makeArr = (num => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr[i] = i;
  }
  return arr;
});
const makeArrSkip = (num => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr[i] = (i === 3 ? '': i);
  }
  return arr;
});
const sampleArrForEach = (() => {
  sampleArr.forEach((element, i) => {
    if (!element.checked) return;
    switch (element.id) {
      case "numArr":
        outputLogPlusForEach(numArr);
        break;
      case "numArrEmpty":
        outputLogPlusForEach(numArrEmpty);
        break;
      case "stringArr":
        outputLogPlusForEach(stringArr);
        break;
      default:
        break;
    }
  });
});
const sampleArrMap = (() => {
  sampleArr.forEach((element) => {
    if (!element.checked) return;
    switch (element.id) {
      case "numArr":
        outputLogPlusMap(numArr);
        break;
      case "numArrEmpty":
        outputLogPlusMap(numArrEmpty);
        break;
      case "stringArr":
        outputLogPlusMap(stringArr);
        break;
      default:
        break;
    }
  });
});
const outputLogPlusForEach = (arr => {
  const copyArr = [...arr];
  console.log(copyArr);
  console.log(sum);
  copyArr.forEach((copyArrElem, i, arr_) => {
    arr_[i] = copyArrElem + 1;
    console.log(`i:${i} / copyArrElem:${copyArrElem} / arr_[${i}]:${arr_[i]}`);
    sum++;
  })
  console.log(copyArr);
  console.log(sum);
  sum = 0;
});
const outputLogPlusMap = (arr => {
  const copyArr = [...arr];
  let tempElem = null;
  const newArr = copyArr.map((copyArrElem) => {
    tempElem = copyArrElem + 1;
    console.log(`copyArrElem:${copyArrElem} / tempElem:${tempElem}`);
    sum++;
    return tempElem;
  })
  console.log(copyArr);
  console.log(newArr);
  console.log(sum);
  sum = 0;
});
const filterLog = (() => {
  const mixArr = [1,2,"a", true, false, null, undefined];
  const result1 = numArr.filter(x => x < 3);
  const result2 = numArrEmpty.filter(() => true);
  const result3 = mixArr.filter(x => x !== undefined && x !== null);
  const result4 = mixArr.filter(x => x);
  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
});
const findLog = (() => {
  const arr = makeArr(20);
  console.log(arr);
  const result1 = arr.find(x => x === 7);
  const result2 = arr.find(x => x % 10 === 0);
  const result3 = arr.find(x => x > 5);
  const result4 = arr.find(x => x > 21);
  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
});
const findIdxLog = (() => {
  const arr = makeArr(20);
  console.log(arr);
  const result1 = arr.findIndex(x => x === 7);
  const result2 = arr.findIndex(x => x % 10 === 0);
  const result3 = arr.findIndex(x => x > 5);
  const result4 = arr.findIndex(x => x > 21);
  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
});
const everyLog = (() => {
  const arr1 = makeArr(5);
  const arr2 = makeArr(10);
  const arr3 = makeArrSkip(5);
  const result1 = arr1.every(x => x < 7);
  const result2 = arr2.every(x => x < 7);
  const result3 = arr3.every(x => x < 7);
  console.log(arr3);
  console.log(result1);
  console.log(result2);
  console.log(result3);
});
const someLog = (() => {
  const arr1 = makeArr(5);
  const arr2 = makeArr(10);
  const arr3 = ["a","b","c","d","e","f","g","h","i","j"];
  const arr4 = makeArrSkip(10);
  const result1 = arr1.some(x => x > 7);
  const result2 = arr2.some(x => x > 7);
  const result3 = arr2.some(isNaN);
  const result4 = arr3.some(isNaN);
  const result5 = arr4.some(x => x === '');
  console.log(arr4);
  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
  console.log(result5);
});
const reduceLog = (() => {
  const arr10 = makeArr(10);
  const arr5 = makeArr(5);
  const result1 = arr10.reduce((a,b) => a + b);
  const result2 = arr10.reduce((a,b) => a * b);
  arr5.reduce((x, y) => outputLog(x,y));
  arr5.reduce((x, y) => outputLog(x,y),10);
  console.log(result1);
  console.log(result2);
  function outputLog(x, y) {
    console.log(`x:${x}/ y:${y}`);
    return y;   // 返り値を指定しないと x に undefined が入る(初期値は別)
  }
});
const reduceRightLog = (() => {
  const arr10 = makeArr(10);
  const arr5 = makeArr(5);
  const result1 = arr10.reduceRight((a,b) => a + b);
  const result2 = arr10.reduceRight((a,b) => a * b);
  arr5.reduceRight((x, y) => outputLog(x,y));
  arr5.reduceRight((x, y) => outputLog(x,y),　10);
  console.log(result1);
  console.log(result2);
  function outputLog(x, y) {
    console.log(`x:${x}/ y:${y}`);
    return y;   // 返り値を指定しないと x に undefined が入る(初期値は別)
  }
});
const flatLog = (() => {
  const arr = [1, [2, [3, [4, 5]]]];
  console.log(arr);
  console.log(arr.flat());
  console.log(arr.flat(0));
  console.log(arr.flat(1));
  console.log(arr.flat(2));
  console.log(arr.flat(3));
  console.log(arr.flat(4));
});
const flatMapLog = (() => {
  const arr = [1, [2, [3, [4, 5]]]];
  console.log(arr);
  console.log(arr.flatMap(x => x));
});
forEachBtn.addEventListener('click', sampleArrForEach);
mapBtn.addEventListener('click', sampleArrMap);
filterBtn.addEventListener('click', filterLog);
findBtn.addEventListener('click', findLog);
findIdxBtn.addEventListener('click', findIdxLog);
everyBtn.addEventListener('click', everyLog);
someBtn.addEventListener('click', someLog);
reduceBtn.addEventListener('click', reduceLog);
reduceRightBtn.addEventListener('click', reduceRightLog);
flatBtn.addEventListener('click', flatLog);
flatMapBtn.addEventListener('click', flatMapLog);