function swap() {
  var leftID = document.getElementById('pic_left');
  rightID = document.getElementById('pic_right');
  leftSRC = leftID.src;
  rightSRC = rightID.src;
  leftID.src = rightSRC;
  rightID.src = leftSRC;
}
