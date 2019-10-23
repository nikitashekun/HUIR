/* global document */
const ready = require('../../js/utils/documentReady.js');

ready(function(){
  let result = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  document.querySelector('.landing-header').classList.add("landing-header--"+result);
});
