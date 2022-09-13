const dragBox = document.getElementById('drag1');
/** https://honobonoengineer.com/js-mouse-drag/
 *   https://honobonoengineer.com/js-elementfrompoint-pointer/
 */
function dragStart(e) {
  e.preventDefault();
  const target = e.currentTarget;
  const outElem = target.parentElement;
  const doc = target.ownerDocument;
  const bodyElem = document.getElementsByTagName('body');
  doc.addEventListener('mousemove', moving);
  doc.addEventListener('mouseleave', stopMoving);
  target.addEventListener('mouseup', stopMoving);
  outElem.addEventListener('mouseup', stopMoving);
  bodyElem.addEventListener('mouseup', stopMoving);
  function moving(e) {
    e.preventDefault();
    const movingElement = doc.elementFromPoint(e.clientX, e.clientY);
    if (movingElement === null) stopMoving;
  }
  function stopMoving(e) {
    e.preventDefault();
    doc.removeEventListener('mousemove', moving);
    doc.removeEventListener('mouseleave', stopMoving);
    target.removeEventListener('mouseup', stopMoving);
    outElem.removeEventListener('mouseup', stopMoving);
    bodyElem.removeEventListener('mouseup', stopMoving);
  }
}

dragBox.addEventListener('mousedown', dragStart);