// 定義 //

const openBtn01 = document.getElementById('test01');
const openBtn02 = document.getElementById('test02');
const openBtn03 = document.getElementById('test03');
const modal01 = document.getElementById('modal01');
const modal02 = document.getElementById('modal02');
const modal03 = document.getElementById('modal03');
const overRay = document.getElementById('overray');
const closeBtn01 = document.getElementById('close01');
const closeBtn02 = document.getElementById('close02');
const closeBtn03 = document.getElementById('close03');

// ブレイクポイント //

const windowWidth = window.innerWidth;

const modalBreakPoint = 599;

// 599px以下での挙動(スマートフォンレイアウト) //

if ( windowWidth <= modalBreakPoint ) {

  // ボタンクリックで各要素表示 //

  openBtn01.onclick = function() {
    modal01.style.cssText = 'visibility: visible; opacity: 1; bottom: 0;';
    overRay.style.cssText = 'visibility: visible; opacity: 0.8;';
  };
  
  openBtn02.onclick = function() {
    modal02.style.cssText = 'visibility: visible; opacity: 1; bottom: 0;';
    overRay.style.cssText = 'visibility: visible; opacity: 0.8;';
  };
  
  openBtn03.onclick = function() {
    modal03.style.cssText = 'visibility: visible; opacity: 1; bottom: 0;';
    overRay.style.cssText = 'visibility: visible; opacity: 0.8;';
  };

  // 閉じるボタンで閉じる //

  closeBtn01.onclick = function() {
    modal01.style.cssText = 'visibility: hidden; opacity: 0; bottom: -100%;';
    overRay.style.cssText = 'visibility: hidden; opacity: 0;';
  };
  
  closeBtn02.onclick = function() {
    modal02.style.cssText = 'visibility: hidden; opacity: 0; bottom: -100%;';
    overRay.style.cssText = 'visibility: hidden; opacity: 0;';
  };
  
  closeBtn03.onclick = function() {
    modal03.style.cssText = 'visibility: hidden; opacity: 0; bottom: -100%;';
    overRay.style.cssText = 'visibility: hidden; opacity: 0;';
  };

  // オーバーレイで閉じる //

  overRay.onclick = function() {
    modal01.style.cssText = 'visibility: hidden; opacity: 0; bottom: -100%;';
    modal02.style.cssText = 'visibility: hidden; opacity: 0; bottom: -100%;';
    modal03.style.cssText = 'visibility: hidden; opacity: 0; bottom: -100%;';
    overRay.style.cssText = 'visibility: hidden; opacity: 0;';
  } ;

}

// 600px以上での挙動 //

else {
  // ボタンクリックで各要素表示 //

  openBtn01.onclick = function() {
    modal01.style.cssText = 'visibility: visible; opacity: 1; right: 0;';
    overRay.style.cssText = 'visibility: visible; opacity: 0.8;';
  };
  
  openBtn02.onclick = function() {
    modal02.style.cssText = 'visibility: visible; opacity: 1; left: 0;';
    overRay.style.cssText = 'visibility: visible; opacity: 0.8;';
  };
  
  openBtn03.onclick = function() {
    modal03.style.cssText = 'visibility: visible; opacity: 1; left: 0;';
    overRay.style.cssText = 'visibility: visible; opacity: 0.8;';
  };

  // 閉じるボタンで閉じる //

  closeBtn01.onclick = function() {
    modal01.style.cssText = 'visibility: hidden; opacity: 0; right: -100%;';
    overRay.style.cssText = 'visibility: hidden; opacity: 0;';
  };
  
  closeBtn02.onclick = function() {
    modal02.style.cssText = 'visibility: hidden; opacity: 0; left: -100%;';
    overRay.style.cssText = 'visibility: hidden; opacity: 0;';
  };
  
  closeBtn03.onclick = function() {
    modal03.style.cssText = 'visibility: hidden; opacity: 0; left: -100%;';
    overRay.style.cssText = 'visibility: hidden; opacity: 0;';
  };

  // オーバーレイで閉じる //

  overRay.onclick = function() {
  modal01.style.cssText = 'visibility: hidden; opacity: 0; right: -100%;';
  modal02.style.cssText = 'visibility: hidden; opacity: 0; left: -100%;';
  modal03.style.cssText = 'visibility: hidden; opacity: 0; left: -100%;';
  overRay.style.cssText = 'visibility: hidden; opacity: 0;';
  } ;
}


  
/* Copyright 2022 aki0921 */