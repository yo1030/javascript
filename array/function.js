const sampleArr = document.getElementsByName('sampleArr');
const numArr = [ 1, 2, 3, 4, 5];
const numArrEmpty = [ 1, 2,, 4, 5];
const stringArr = ["a", "b", "c", "d", "e"];
const forEachBtn = document.getElementById('forEachBtn');
const mapBtn = document.getElementById('mapBtn');
let sum = 0;

const sampleArrForEach = (()=>{
  sampleArr.forEach((element, i) => {
    if (!element.checked) return;
    switch (element.id) {
      case "numArr":
        outputLogPlus(numArr);
        break;
      case "numArrEmpty":
        outputLogPlus(numArrEmpty);
        break;
      case "stringArr":
        outputLogPlus(stringArr);
        break;
      default:
        break;
    }
  });
});

const outputLogPlus = (arr => {
  const copyArr = [...arr];
  console.log(copyArr);
  console.log(sum);
  copyArr.forEach((copyArrElem, i, arr_) => {
    arr_[i] = copyArrElem + 1;
    console.log(`i:${i} / copyArrElem:${copyArrElem} / arr_[${i}]:${arr_[i]}`);
    sum++;
  })
  // copyArr.forEach(function (copyArrElem, i, arr_) {
  //   arr_[i] = copyArrElem + 1;
  //   console.log(`i:${i} / copyArrElem:${copyArrElem} / arr_[${i}]:${arr_[i]}`);
  //   sum++;
  // })
  console.log(copyArr);
  console.log(sum);
  sum = 0;
})
forEachBtn.addEventListener('click', sampleArrForEach)