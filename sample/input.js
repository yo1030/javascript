const clipBoardIpt = document.getElementById('clipBoardIpt');
function cutEvent(e) {
  e.preventDefault();
  console.log(e);
  const selection = document.getSelection();
  e.clipboardData.setData('key', selection);
  selection.deleteFromDocument();
}
function copyEvent(e) {
  e.preventDefault();
  console.log(e);
  e.clipboardData.setData('key', e.target.value);
  console.log(e.clipboardData.getData('key'));
}
function pasteEvent(e) {
  e.preventDefault();
  console.log(e);
  clipBoardIpt.value = e.clipboardData.getData('key');
}
clipBoardIpt.addEventListener('cut', cutEvent);
clipBoardIpt.addEventListener('copy', copyEvent);
clipBoardIpt.addEventListener('paste', pasteEvent);