// ==UserScript==
// @name         SoLA_DontTellMeAboutChallangeDungeon
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://lostartifact.xsrv.jp/SoLA/*
// @grant        none
// @require https://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';


    $("a[href='infinity.php']").prev().remove();
    $("a[href='infinity.php']").next().remove();
    $("a[href='infinity.php']").remove();

    $('th:contains("チャレンジ")').next().text('***');
    $('th:contains("チャレンジ")').text('***');

    // Your code here...
})();