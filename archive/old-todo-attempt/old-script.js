// Legacy Todo attempt from before I refactored to state-driven rendering.
// This was getting messy with innerHTML string concatenations and spaghetti event handlers.
// Kept for posterity and to see how my approach improved.

var list = document.getElementById('myList');
var btn = document.getElementById('btn');
var input = document.getElementById('txt');

btn.onclick = function() {
  var val = input.value;
  if (val != '') {
    list.innerHTML += '<li>' + val + ' <a href="#" onclick="this.parentNode.remove()">x</a></li>';
    input.value = '';
  }
};
