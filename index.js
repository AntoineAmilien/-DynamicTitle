var text = document.getElementById('text');
var word = text.getElementsByTagName('span');

var i = 0;

function rotation(){

  word[i].style.display = 'none';
  i = (i + 1) % word.length;
  word[i].style.display = 'initial';

}

setInterval(rotation,800);
