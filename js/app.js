/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./node_modules/fb24m-pro-plus/tabs.js


let tabButtons = document.querySelectorAll('.tabs-tab');
let tabContents = document.querySelectorAll('.tabs-content');

tabButtons.forEach((tabButton, tabButtonIndex) => {
  tabButton.addEventListener('click', e => {
    tabButtons.forEach(tabButton => {
      tabButton.classList.remove('_tab-opened');
    });
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('_tab-opened');
    });

    tabContents[tabButtonIndex].classList.toggle('_tab-opened');
    tabButton.classList.toggle('_tab-opened');
  });
});
;// CONCATENATED MODULE: ./src/js/modules/multypage-list.js
//import '../../scss/base/multypage.scss';

let openInfo = document.querySelector('#multypage-open');

openInfo.addEventListener('click', e => {
    document.documentElement.classList.toggle('_multypage-opened');
});
;// CONCATENATED MODULE: ./src/js/app.dev.js





/******/ })()
;