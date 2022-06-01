function menu() {
  document.getElementById('line1').classList.toggle('line1');
  document.getElementById('line2').classList.toggle('line2');
  document.getElementById('line3').classList.toggle('line3');
  document.getElementById('gNav').classList.toggle('show');
}
document.getElementById('navBtn').addEventListener('click' , function () {
  menu();
} );
