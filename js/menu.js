const openBtn = document.getElementById('btn');

openBtn.addEventListener('click' , function() {
  document.getElementById('top').classList.toggle('topRotate');
  document.getElementById('bottom').classList.toggle('bottomRotate');
  document.getElementById('nav').classList.toggle('show');
})

/* Code by aki0921 */