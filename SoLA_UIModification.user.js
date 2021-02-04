// ==UserScript==
// @name         SoLA_UIModification
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Story of Lost Artifact(SoLA)のUIの利便性を向上させるための修正を施します
// @author       Kirikabu
// @match        http://lostartifact.xsrv.jp/SoLA/*
// @grant        none
// @require https://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';
    var url = window.location.href;

    function getSurfaceText(selector){
        var elem = $(selector[0].outerHTML);
        elem.children().empty();
        return elem.text();
    }

    //　チャットページでは下にあるページ切り替えを上にもコピーする
    if ( url.match(new RegExp('chat.php')) != null ) {
        var favlinks = $("table[style='table-layout: fixed;']");

        var linkHTML = $('a[href$="p=1"]').parent().parent().prop('outerHTML');

        $("table[style='table-layout: fixed;'][align='center']:eq(1)").before(linkHTML);
    }

    //　戦闘ページでは下にある結果一覧を上にもコピーする
    if ( url.match(new RegExp('/battle/')) != null ) {
        //console.log($("a[href='/../SoLA/main.php']").prev().prev().prev());

        var tex = $("#main").text()

        var upperHTML = "戦闘結果:<br>";

        var winner = RegExp('.*チームの勝利！', 'g');
        var result = tex.match(winner);
        if (result != null) {
            upperHTML += result[0];
        }else{
            upperHTML += "引き分け！";
        }
        upperHTML += "<br>";
        var stepo = RegExp('ステータスポイントを[0-9]*取得した！', 'g');
        result = tex.match(stepo);
        if (result != null) {
            upperHTML += result[0];
            upperHTML += "<br>";
        }
        var medal = RegExp('ギルドメダルを[0-9]*枚取得した！', 'g');
        result = tex.match(medal);
        if (result != null) {
            upperHTML += result[0];
            upperHTML += "<br>";
        }
        var mel = RegExp('メルを.*mel取得した！', 'g');
        result = tex.match(mel);
        if (result != null) {
            upperHTML += result[0];
            upperHTML += "<br>";
        }
        var af = RegExp('.*を手に入れた！', 'g');
        result = tex.match(af);
        if (result != null) {
            upperHTML += result[0];
            upperHTML += "<br>";
            if (result.length == 2){
                upperHTML += result[1];
                upperHTML += "<br>";
            }
        }
        var skill = RegExp("追加の基本スキルを習得した！", 'g');
        result = tex.match(skill);
        if (result != null) {
            upperHTML += result[0];
            upperHTML += "<br>";
        }
        var meisei = RegExp("名声を[0-9]*獲得した！", 'g');
        result = tex.match(meisei);
        if (result != null) {
            upperHTML += result[0];
            upperHTML += "<br>";
        }
        var syougo = RegExp('称号.*を手に入れた！', 'g');
        result = tex.match(syougo);
        if (result != null) {
            upperHTML += result[0];
            upperHTML += "<br>";
        }
        upperHTML += "<br><a href='/../SoLA/battlelog.php'>戦闘ログ一覧へ移動</a><br><br>";
        upperHTML += "<a href='/../SoLA/main.php'>ホーム画面に戻る</a>";
        console.log(upperHTML);

        $("#main > div.center").before(upperHTML);

    }

    // Your code here...
})();
