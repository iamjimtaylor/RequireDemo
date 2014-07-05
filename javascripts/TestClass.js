/**
*  TestClass.js
*
*  Requires: jQuery
*
*  Copyright 2014 Ph.Creative
**/
define([], function ($) {
  "use strict";

  var TestClass = function (id) {
    this.element = document.getElementById(id);
  };
  TestClass.prototype.constructor = TestClass;

  /**
  *  Change text
  **/
  TestClass.prototype.changeText = function (text) {
    this.element.innerHTML = text;
  };

  return TestClass;
});
