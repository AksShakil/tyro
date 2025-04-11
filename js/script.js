// document.querySelector('.btn1').addEventListener('click', function() {
//   document.querySelector('.left').style.visibility = 'visible';
//   document.querySelector('.right').style.visibility = 'hidden';
// });

// document.querySelector('.btn2').addEventListener('click', function() {
//   document.querySelector('.left').style.visibility = 'hidden';
//   document.querySelector('.right').style.visibility = 'visible';
// });






document.querySelector('.btn1').addEventListener('click', function() {
  document.querySelector('.left').style.display = 'block';  // Show the left div
  document.querySelector('.right').style.display = 'none';  // Hide the right div
});

document.querySelector('.btn2').addEventListener('click', function() {
  document.querySelector('.left').style.display = 'none';  // Hide the left div
  document.querySelector('.right').style.display = 'block'; // Show the right div
});







// window.addEventListener("scroll",function(){
//   var header = document.querySelector("#header_part");
//   header.classList.toggle("sticky",window.scrollY > 0)
// })












// function changeImage() {
  
//   var img = document.getElementById('image');
//   img.src = 'group.png';
// }

