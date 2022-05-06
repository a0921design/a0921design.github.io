/* 開く */

document.getElementById('uuid').onclick = function() {
  document.getElementById('modal01').classList.add('showLeft');
  document.getElementById('overray').style.cssText = ('opacity: 0.8; visibility:visible;');
};

document.getElementById('emosic').onclick = function() {
  document.getElementById('modal02').classList.add('showLeft');
  document.getElementById('overray').style.cssText = ('opacity: 0.8; visibility:visible;');
};

document.getElementById('kal').onclick = function() {
  document.getElementById('modal03').classList.add('showRight');
  document.getElementById('overray').style.cssText = ('opacity: 0.8; visibility:visible;');
};

document.getElementById('concept').onclick = function() {
  document.getElementById('conceptWindow').style.cssText = ('opacity: 1; visibility:visible;');
  document.getElementById('overray').style.cssText = ('opacity: 0.8; visibility:visible;');
};

/* 閉じる */

document.getElementById('overray').onclick = function() {
  document.getElementById('modal01').classList.remove('showLeft');
  document.getElementById('modal02').classList.remove('showLeft');
  document.getElementById('modal03').classList.remove('showRight');
  document.getElementById('conceptWindow').style.cssText = ('opacity: 0; visibility: hidden;');
  document.getElementById('overray').style.cssText = ('opacity: 0; visibility: hidden;');
};

document.getElementById('close01').onclick = function() {
  document.getElementById('modal01').classList.remove('showLeft');
  document.getElementById('overray').style.cssText = ('opacity: 0; visibility: hidden;');
};

document.getElementById('close02').onclick = function() {
  document.getElementById('modal02').classList.remove('showLeft');
  document.getElementById('overray').style.cssText = ('opacity: 0; visibility: hidden;');
};

document.getElementById('close03').onclick = function() {
  document.getElementById('modal03').classList.remove('showRight');
  document.getElementById('overray').style.cssText = ('opacity: 0; visibility: hidden;');
};

document.getElementById('closeConcept').onclick = function() {
  document.getElementById('conceptWindow').style.cssText = ('opacity: 0; visibility: hidden;');
  document.getElementById('overray').style.cssText = ('opacity: 0; visibility: hidden;');
};



/* Copyright 2022 aki0921 */