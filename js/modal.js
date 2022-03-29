const openBtn = document.getElementById('test01');
const modal = document.getElementById('modal');
const overRay = document.getElementById('overray');
const closeBtn = document.getElementById('close');

// ボタンクリックで各要素表示 //

openBtn.onclick = function() {
  modal.style.cssText = 'visibility: visible; opacity: 1; right: 0;';
  overRay.style.cssText = 'visibility: visible; opacity: 0.8;';
};

// 閉じるボタンで閉じる //

closeBtn.onclick = function() {
  modal.style.cssText = 'visibility: hidden; opacity: 0; right: -100%;';
  overRay.style.cssText = 'visibility: hidden; opacity: 0;';
}

// オーバーレイで閉じる //

overRay.onclick = function() {
  modal.style.cssText = 'visibility: hidden; opacity: 0; right: -100%;';
  overRay.style.cssText = 'visibility: hidden; opacity: 0;';
} 

/* Copyright 2022 aki0921 */