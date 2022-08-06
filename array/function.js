const sampleArr = document.getElementsByName('sampleArr');
const numArr = [ 1, 2, 3, 4, 5];
const numArrEmpty = [ 1, 2,, 4, 5];
const stringArr = ["a", "b", "c", "d", "e"];
const forEachBtn = document.getElementById('forEachBtn');
const mapBtn = document.getElementById('mapBtn');
let sum = 0;

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
})

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
})
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
})
forEachBtn.addEventListener('click', sampleArrForEach);
mapBtn.addEventListener('click', sampleArrMap);