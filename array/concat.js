const concatBtn = document.getElementById('concatBtn');
const concatNestBtn = document.getElementById('concatNestBtn');
const concatLog = (() => {
  const arr = [1,"a",2];
  const arr1 = arr.concat([3,"b"]);
  console.log(arr);
  console.log(arr1);
});
const concatNestLog = (() => {
  const arr = [1, 2, 3];
  const arr1 = arr.concat([4, 5], [6, 7]);
  const arr2 = arr.concat([4, 5], [6, [7, 8]]);
  console.log(arr);
  console.log(arr1);
  console.log(arr2);
});
concatBtn.addEventListener('click', concatLog);
concatNestBtn.addEventListener('click', concatNestLog);