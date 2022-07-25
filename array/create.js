// import { arrLiteBtn,arrayLiteral } from "./difiniteVariable.js";
const arrLiteBtn = document.getElementById('arrLiteralBtn');
const stepUpBtn = document.getElementById('stepUpBtn');
const arrayLiteralName = document.getElementsByName('arrayLiteral');
const outputArea = document.getElementById('output');
const spreadBtn = document.getElementById('spreadBtn');

function clearOutput() {
  while (outputArea.children.length) {
    outputArea.children[0].remove();
  }
}
// array
function outputValue(arrParam) {
  for (let i = 0; i < arrParam.length; i++) {
    const pElem = document.createElement('p');
    const tempValue = arrParam[i];
    pElem.innerText = 'index:' + i
                    + ' value:' + tempValue
                    + ' type:' + typeof(tempValue);
    outputArea.appendChild(pElem);
  }
}
function arrayLiteral(event) {
  const arrPrime = [1,2,3,4,5];
  const arrString = ["a","b","c","d","e"];
  const arrMix =[1, "a", true, 2, "b", false, null];
  event.preventDefault();
  for (let i = 0; i < arrayLiteralName.length; i++) {
    if (arrayLiteralName[i].checked) {
      clearOutput();
      switch (arrayLiteralName[i].id) {
        case 'arrLiteNumber':
          outputValue(arrPrime);
          break;
        case 'arrLiteString':
          outputValue(arrString);
          break;
        case 'arrLiteMix':
          outputValue(arrMix);
          break;
        default:
          alert('id:'+ arrayLiteralName[i].id);
          break;
      }
    }
  }
}
function stepUp(event) {
  event.preventDefault();
  const inputValue = Number(document.getElementById('stepUpInput').value);
  const outputArr = [
    inputValue,
    inputValue + 1,
    inputValue + 2,
    inputValue + 3
  ];
  clearOutput();
  outputValue(outputArr);
}
function spreadFunc() {
  const tempArr = [1,false,2,true,3];
  const spreadArr = ['first', ...tempArr, 'finish'];
  clearOutput();
  outputValue(spreadArr);
}
arrLiteBtn.addEventListener('click', arrayLiteral);
stepUpBtn.addEventListener('click', stepUp);
spreadBtn.addEventListener('click', spreadFunc);