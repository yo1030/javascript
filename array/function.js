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
const flatBtn = document.getElementById('flatBtn');
let sum = 0;

const makeArr = (num => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr[i] = i;    
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
  console.log('every');
})
const someLog = (() => {
  console.log('some');
})
forEachBtn.addEventListener('click', sampleArrForEach);
mapBtn.addEventListener('click', sampleArrMap);
filterBtn.addEventListener('click', filterLog);
findBtn.addEventListener('click', findLog);
findIdxBtn.addEventListener('click', findIdxLog);
everyBtn.addEventListener('click', everyLog);
someBtn.addEventListener('click', someLog);