window.addEventListener('scroll', function() {
  this.document.querySelector('header').classList.toggle('scrollHeader',window.scrollY >= this.window.innerHeight / 3 - 100);
});

/* Copyright (c) 2022 by notebook (https://codepen.io/orange-notebook/pen/BaZqZpw) */