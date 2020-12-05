// document.addEventListener('DOMContentLoaded', function () {
// 	document.querySelector('#grayscale')
// 		.addEventListener('input', grayscaleImage);
// 	grayscaleImage();
// });

// function grayscaleImage() {
//     var imageElement = document.querySelector('.image');
// 	// var imageElement = document.querySelector(".img");
// 	var grayscaleInputElement = document.querySelector('#grayscale');
// 	imageElement.style.filter = 'grayscale(' + parseInt(grayscaleInputElement.value) /
// 		parseInt(grayscaleInputElement.max) + ')';
// 	return false;
// };
console.log("hello bauhaus!");




// document.querySelector(".light-mode").addEventListener("click", function() {
// div3.classList.add("hide");
// });
// let div3 = document.querySelector(".light-mode");

// console.log("hello bauhaus!");
// let div3 = document.querySelector(".light-mode");
// div3.innerHTML="1995";


// document.querySelector(".light-mode").addEventListener("mouseover", function() {
// div3.classList.add("hide");
// });
// document.querySelector(".light-mode").addEventListener("mouseout", function() {
// div3.classList.add("hide");
// });

// let theme = localStorage.getItem("theme")
// if(theme== null){
//   setTheme("light")
// }else{
//   setTheme(theme)
// }


// let themeDots = document.getElementsByClassName("theme-dot")
// for(var i=0; themeDots.length >i ; i++){
//   themeDots[i].addEventListener("click", function(){
//     let mode = this.dataset.mode
//     console.log("Option clicked",mode)
//     setTheme(mode)
//   })  
// }
// function setTheme(mode){
//   if(mode== "light"){
//     document.getElementByClassName("ninety")
//   }
// //   if(mode== "blue"){
// //     document.getElementByClassName("zero")
// // //   }
// //   if(mode== "green"){
// //     document.getElementById("theme-style").href = "green.css"
// //   }
// //   if(mode== "purple"){
// //     document.getElementById("theme-style").href = "purple.css"
// //   }  
//   localStorage.setItem("theme", mode)
// }
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }