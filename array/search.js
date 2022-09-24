const idxOfBtn = document.getElementById('idxOfBtn');
const lastIdxOfBtn = document.getElementById('lastIdxOfBtn');
const includesBtn = document.getElementById('includesBtn');
const sortBtn = document.getElementById('sortBtn');
const reverseBtn = document.getElementById('reverseBtn');

/** indexOf, lastIndexOf, includes は文字列にも使えるメソッド */
const idxOfLog = (() => {
  const arr = makeArr(5);
  const arr_ = arr.concat(makeArr(5).reverse());
  const result1 = arr_.indexOf(3);
  const result2 = arr_.indexOf("a");
  const result3 = arr_.indexOf(3, 5);
  console.log(`作成した配列：${arr_}`);
  console.log(`indexOfの結果1：${result1}：${arr_[result1]}`);
  console.log(`indexOfの結果2：${result2}`);
  console.log(`indexOfの結果3：${result3}：${arr_[result3]}`);
});
const lastIdxOfLog = (() => {
  const arr = makeArr(5);
  const arr_ = arr.concat(makeArr(5).reverse());
  const result1 = arr_.lastIndexOf(3);
  const result2 = arr_.lastIndexOf("a");
  console.log(`作成した配列：${arr_}`);
  console.log(`lastIndexOfの結果1：${result1}：${arr_[result1]}`);
  console.log(`lastIndexOfの結果2：${result2}`);
});
const includesLog = (() => {
  let arr = makeArr(5);

  let result = arr.includes(3);
  console.log(result);

  result = arr.includes("3");
  console.log(result);

  arr.push(NaN);
  result = arr.includes(NaN);
  console.log(result);

  arr.push(null);
  result = arr.includes(undefined);
  console.log(result);
});
const sortLog = (() => {
  let arr1 = ["c","d","a","b","e"];
  let arr2 = [undefined,"c","a","b","d",undefined];
  let arr3 = [null,"c","b","a","d",null];
  let arr4 = [null,undefined,"c","b","a",null,undefined];
  arr1.sort();
  arr2.sort();
  arr3.sort();
  arr4.sort();
  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);
  let num1 = [3, 4, 7, 2,1,8,9,6];
  let num2 = [3, 2, 1, 4];
  let num3 = [3, 4, 7, 2,1,8,9,6];
  console.log(num1);
  num1.sort((a,b) =>  a-b);
  num2.sort((a,b) => b-a);
  console.log(num1);
  console.log(num2);
  num3.sort((a,b) =>  b-a);
  console.log(num3);
  let Arr1 = ["C","d","A","b","E"];
  let Arr2 = ["C","d","A","b","E"];
  let Arr3 = ["C","d","A","b","E"];
  Arr1.sort();
  Arr2.sort((a,b) => {
    let s = a.toLocaleUpperCase();
    let t = b.toLocaleUpperCase();
    if (s < t) return -1;
    if (s > t) return 1;
    return 0;
  });
  Arr3.sort((a,b) => {
    let s = a.toLocaleLowerCase();
    let t = b.toLocaleLowerCase();
    if (s < t) return -1;
    if (s > t) return 1;
    return 0;
  });
  console.log(Arr1);
  console.log(Arr2);
  console.log(Arr3);
});
const reverseLog = (() => {
  let arr = makeArr(10);
  let arr1 = makeArr(10);
  arr1.reverse();
  console.log(arr);
  console.log(arr1);
});
function makeArr(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr[i] = i;
  }
  return arr;
}
idxOfBtn.addEventListener('click', idxOfLog);
lastIdxOfBtn.addEventListener('click', lastIdxOfLog);
includesBtn.addEventListener('click', includesLog);
sortBtn.addEventListener('click', sortLog);
reverseBtn.addEventListener('click', reverseLog);