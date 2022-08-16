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
// 呼び出し元の配列の値は変わらない
// slice(a,b) => a~(b-1)の要素を取得(b自身は含まない)
// 最初の要素は 0 で指定する
// 第二引数を省略：以降の要素全てを取得(第一引数を省略するとsyntaxエラー)
// 負の数で指定された場合、後ろから考える
// 一番後ろの値は -1 で指定する。後ろから2番目は -2
const sliceLog = (() => {
  const arr = makeArr(10);
  console.log(`作成した配列：${arr}`);
  const result1 = arr.slice(0, 5);
  const result2 = arr.slice(5);
  const result3 = arr.slice( 2,-3);
  const result4 = arr.slice(-6, -1);
  console.log(`引数2つ：${result1}`);
  console.log(`引数1つ：${result2}`);
  console.log(`引数2つ片方負：${result3}`);
  console.log(`引数2つ両方負：${result4}`);
  console.log(`arr：${arr}`);
});
// 呼び出し元の配列を変更する
// 挿入と削除を同時に実行できる（別々に行うこともできる）
// 配列のインデックス値は動的に変更する
// splice(a,b,c...) a -> 挿入や削除を開始する位置
//                       b -> 削除する要素の個数
//                       c -> a で指定された位置に挿入する要素
//  c に配列が渡されたとき、新たに作成される配列には展開されずに渡される
//      関数に残余引数として渡した場合は扱いが異なる？
//      (3)と(4)で配列を渡しているが、(3)は展開されて、(4)は展開されない
// 返り値は削除した（取り除いた）要素
const spliceLog = (() => {
  outputSplice(10, 4);                      // (1)
  outputSplice(10, 4, 2);                  // (2)
  outputSplice(10, 4, 2, "a", "b");     // (3)
  const arr = makeArr(10);
  const strArr = ["a","b","c"];
  const result = arr.splice(2,3,strArr);
  console.log(result);
  console.log(arr);                          // (4)
  function outputSplice(arrNum, startIdx, length, ...arg) {
    const arr = makeArr(arrNum);
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
//  copyWithin(a,b,c) 呼び出し元の配列を変更する
//                            変更した配列を返す
//    a : コピーした要素を配列のどの要素に置き換えるか指定
//    b : 配列のどの要素からコピーを行うか
//    c : 配列のコピーをどこまで行うか指定
const copyWithinLog = (() => {
  const arr = makeArr(10);
  let arr1 = makeArr(10);
  let arr2 = makeArr(10);
  let arr3 = makeArr(10);
  console.log(`作成した配列：${arr}`);
  arr1.copyWithin(2);
  console.log(`copyWithinの戻り値1：${arr1}`);
  arr2.copyWithin(2, 4);
  console.log(`copyWithinの戻り値2：${arr2}`);
  arr3.copyWithin(2, 4, -3);
  console.log(`copyWithinの戻り値2：${arr3}`);
});

sliceBtn.addEventListener('click', sliceLog);
spliceBtn.addEventListener('click', spliceLog);
fillBtn.addEventListener('click', fillLog);
copyWithinBtn.addEventListener('click', copyWithinLog);