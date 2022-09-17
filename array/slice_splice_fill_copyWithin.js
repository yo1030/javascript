const sliceBtn = document.getElementById('sliceBtn');
const spliceBtn = document.getElementById('spliceBtn');
const fillBtn = document.getElementById('fillBtn');
const copyWithinBtn = document.getElementById('copyWithinBtn');

const makeArr = (num => {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr[i] = i;
  }
  return arr;
});
const sliceLog = (() => {
  const arr = makeArr(10);
  const result1 = arr.slice(0, 5);
  const result2 = arr.slice(5);
  const result3 = arr.slice( 2,-3);
  const result4 = arr.slice(-6, -1);
  console.log(`作成した配列：${arr}`);
  console.log(`result：${result1}`);
  console.log(`引数1つ：${result2}`);
  console.log(`引数2つ片方負：${result3}`);
  console.log(`引数2つ両方負：${result4}`);
  console.log(`arr：${arr}`);
});
const spliceLog = (() => {
  outputSplice(10, 4);                      // (1)
  outputSplice(10, 4, 2);                  // (2)
  outputSplice(10, 4, 2, "a", "b");     // (3)
  const arr = makeArr(10);
  const strArr = ["a","b","c"];
  const result = arr.splice(2,3,strArr);
  console.log('-----------function--------splice-------------------');
  console.log(result);
  console.log(arr);                          // (4)
  function outputSplice(arrNum, startIdx, length, ...arg) {
    const arr = makeArr(arrNum);
    console.log('-----------function-------outputSplice-------------------');
    console.log(`作成した配列：${arr}`);
    if ((arg.length !== 0) &&
        (length !== undefined)) {
      const result = arr.splice(startIdx, length, arg);
      console.log(`splice後の配列：${arr}`);
      console.log(`返り値：${result}`);
    } else if (length !== undefined) {  // arg.length === 0
      const result = arr.splice(startIdx, length);
      console.log(`splice後の配列：${arr}`);
      console.log(`返り値：${result}`);
    } else { // only startIdx
      const result = arr.splice(startIdx);
      console.log(`splice後の配列：${arr}`);
      console.log(`返り値：${result}`);
    }
  }
});
//  呼び出し元の配列を変更する
//  fill(value, startIdx, lastIdx);
//  負の数の場合、配列の末尾からの相対位置
const fillLog = (() => {
  let arr = makeArr(10);
  console.log(`作成した配列：${arr}`);
  const result = arr.fill("a");
  console.log(`fillの返り値：${result}`);
  console.log(`元の配列：${arr}`);
});
const copyWithinLog = (() => {
  const arr = makeArr(10);
  let arr1 = makeArr(10);
  let arr2 = makeArr(10);
  let arr3 = makeArr(10);
  let arr4 = makeArr(10);
  console.log(`作成した配列：${arr}`);
  arr1.copyWithin(2);
  console.log(`arr1：${arr1}`);
  arr2.copyWithin(2, 4);
  console.log(`arr2：${arr2}`);
  arr3.copyWithin(2, 4, -3);
  console.log(`arr3：${arr3}`);
  arr4.copyWithin(2, 1);
  console.log(`arr4：${arr4}`);
});

sliceBtn.addEventListener('click', sliceLog);
spliceBtn.addEventListener('click', spliceLog);
fillBtn.addEventListener('click', fillLog);
copyWithinBtn.addEventListener('click', copyWithinLog);