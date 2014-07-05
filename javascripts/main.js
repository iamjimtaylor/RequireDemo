/**
*  main.js
*
*  Requires: jQuery
*
*  Copyright 2014 Ph.Creative
**/
define(["jquery", "tc"], function ($, tc) {
  "use strict";

  // Create new class
  var test = new tc("js-test");

  document.getElementById("js-input").addEventListener("input", function () {
    test.changeText(this.value);
  }, false);
});
