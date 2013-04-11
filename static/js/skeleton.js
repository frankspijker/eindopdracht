/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console*/

(function () {
    'use strict';

    // Alle parameters worden voorzien van datatype doorgestuurd naar console.log()
    var print = function () {
        var i;
        for (i = 0; i < arguments.length; i += 1) {
            console.log("<" + typeof (arguments[i]) + "> " + arguments[i]);
        }
    };

    // Jouw code komt hier onder
var antwoordEen = function (tekst) {
        var optie1 = document.getElementById('optie1');
        optie1.innerHTML += tekst;
    };
var antwoordTwee = function (tekst) {
        var optie2 = document.getElementById('optie2');
        optie2.innerHTML += tekst;
    };
var antwoordDrie = function (tekst) {
        var optie3 = document.getElementById('optie3');
        optie3.innerHTML += tekst;
    };