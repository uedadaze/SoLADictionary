// ==UserScript==
// @name         SoLA_SakadachiLog
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Story of Lost Artifact(SoLA)の会話ログを逆順に並び替えて保存に適した状態にします
// @author       Kirikabu
// @match        http://lostartifact.xsrv.jp/SoLA/chat.php*
// @grant        none
// @require https://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';

    addButton();

    function addButton(){
        $("table[style='table-layout: fixed;'][align='center']:eq(1)").before('<input type="button" class="sakadachi" value="ログを反転！";"/><br />');

        $('.sakadachi').click(function() {
            Sakadachi();
        });
    }

    function Sakadachi(){
        var targettable = $("table[style='table-layout: fixed;']").eq(1);
        var trs = targettable.find("tr");
        for (let i=0; i<trs.length-5; i+=5){
            trs.eq(i).before(trs.eq(i+5), trs.eq(i+6), trs.eq(i+7));
        }
    }
})();