###
TestClass.coffee

Requires: jQuery

Copyright 2014 Ph.Creative
###
class TestClass
    constructor: (id) ->
        @element = document.getElementById id

    changeText: (text) ->
        @element.innerHTML = text;

define [], () ->
    return TestClass