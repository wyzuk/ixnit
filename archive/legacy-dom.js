// Old way I used to write DOM code before moving to cleaner patterns
// Bad practices here: innerHTML string concat, inline onclick

var box = document.getElementById('box');
var btn = document.getElementById('btn');

btn.onclick = function() {
  var text = document.getElementById('inp').value;
  box.innerHTML += '<div>' + text + ' <a href="#" onclick="this.parentNode.remove()">x</a></div>';
};
