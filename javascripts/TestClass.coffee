###
TestClass.coffee

Requires: jQuery

Copyright 2014 Ph.Creative
###
class TestClass
    constructor: (id, input) ->
        @element = document.getElementById id
        that = this

        document.getElementById(input).addEventListener "input", (e) ->
            that.changeText this.value
        , false

    changeText: (text) ->
        @element.innerHTML = text

define [], () ->
    return TestClass