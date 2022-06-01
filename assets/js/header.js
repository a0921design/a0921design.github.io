window.addEventListener('scroll', function() {
  this.document.querySelector('header').classList.toggle('scrollHeader',window.scrollY >= this.window.innerHeight / 3 - 100);
});