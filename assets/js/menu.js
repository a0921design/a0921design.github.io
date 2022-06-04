function menu() {
  document.getElementById('line1').classList.toggle('line1');
  document.getElementById('line2').classList.toggle('line2');
  document.getElementById('line3').classList.toggle('line3');
  document.getElementById('gNav').classList.toggle('show');
}
document.getElementById('navBtn').addEventListener('click' , function () {
  menu();
} );

const linkTxt = document.getElementsByTagName('nav')[0].getElementsByTagName('a');

for (var trigger of linkTxt) {
  trigger.addEventListener('click' , function () {
    document.getElementById('line1').classList.remove('line1');
    document.getElementById('line2').classList.remove('line2');
    document.getElementById('line3').classList.remove('line3');
    document.getElementById('gNav').classList.remove('show');
  });
};

/* Copyright (c) 2022 by asukas (https://codepen.io/asukas/pen/oNbxpVy) */