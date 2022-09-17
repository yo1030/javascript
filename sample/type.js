const typeOfBtn = document.getElementById('typeof');
const objToStringBtn = document.getElementById('objToStringBtn');
const isArrayBtn = document.getElementById('isArrayBtn');
function typeofFunction() {
  typeofLog(undefined);
  typeofLog(null);
  typeofLog(true);
  typeofLog(5);
  typeofLog(NaN);
  typeofLog("3");
  typeofLog(Symbol());
  typeofLog([]);
  typeofLog({});
  typeofLog(new String());
  typeofLog(new Number());
  typeofLog(function () { });
  function typeofLog(target) {
    console.log(typeof target);
  } 
}
function objToString() {
  objLog([]);
  objLog(null);
  objLog(undefined);
  objLog(new Date);
  objLog(new String);
  objLog(function (){});
  objLog(new Map);
  objLog(new Set);
  function objLog(target) {
    console.log(Object.prototype.toString.call(target))
  }
}

function isArrayFunction() {
  isArrLog([]);               // true
  isArrLog([1]);             // true
  isArrLog({});              // false
  isArrLog(true);           // false
  isArrLog(5);               // false
  isArrLog(null);            // false
  isArrLog(undefined);   // false
  function isArrLog(target) {
    console.log(Array.isArray(target));
  }
}
typeOfBtn.addEventListener('click', typeofFunction);
objToStringBtn.addEventListener('click', objToString);
isArrayBtn.addEventListener('click', isArrayFunction);