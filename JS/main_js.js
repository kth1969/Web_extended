//Function for Buttons//

function first() {
  var x = document.getElementById("first");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  function second() {
  var x = document.getElementById("second");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function third() {
  var x = document.getElementById("third");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  function forth() {
  var x = document.getElementById("forth");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}




// Scale images//
function setImage() {
  var e = document.getElementById('mySelect');
  document.getElementById('myImage').src = e.options[e.selectedIndex].value;
}

function resizeImage() {
  var image = document.getElementById('scale-wrapper'),
      ranger = document.getElementById('mySlider');
  image.style.width = 100*(mySlider.value / 1)+'px';}