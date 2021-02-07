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
        var card = RegExp('スキルカード【.*】を獲得した！', 'g');
        result = tex.match(card);
        if (result != null) {
            upperHTML += result[0];
            upperHTML += "<br>";
        }
        var af = RegExp('^(?!.*称号).*を手に入れた！', 'g');
        result = tex.match(af);
        if (result != null) {
            upperHTML += result[0];
            upperHTML += "<br>";
            if (result.length == 2){
                upperHTML += result[1];
                upperHTML += "<br>";
            }
        }
        var affailed = RegExp('持ち物がいっぱいだった！自動的に解放された！', 'g');
        result = tex.match(affailed);
        if (result != null){
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

        $("#main > div.center").before(upperHTML);

    }

    //　チャレダンページ
    if ( url.match(new RegExp('/battle.php')) != null ) {
        //　チャレダンメニューを上へ
        tex = $("#main").text()
        upperHTML = "戦闘結果:<br>";

        var battle_result = RegExp('バトルに勝利した！', 'g');
        result = tex.match(battle_result);
        if (result != null) {
            upperHTML += result[0];
        }
        battle_result = RegExp('引き分け！', 'g');
        result = tex.match(battle_result);
        if (result != null) {
            upperHTML += result[0];
        }
        battle_result = RegExp('バトルに敗北した……', 'g');
        result = tex.match(battle_result);
        if (result != null) {
            upperHTML += result[0];
            var result_floor = RegExp('記録：[0-9]*階', 'g');
            if (result_floor != null){
                upperHTML += "<br>" + result_floor[0];
            }
        }
        upperHTML += "<br><a href='http://lostartifact.xsrv.jp/SoLA/infinity.php'>チャレンジダンジョンメニューに戻る</a><br><br>"

        //　味方の状態の変化を記録
        upperHTML += "<table border='1' bordercolor='#AAAAAA' style='color: brown;'><tbody><tr><th width='200' style='background-color: rgba(225, 225, 255, 0.6); color: rgb(32, 46, 64);'>キャラ名</th><th width='300' style='background-color: rgba(225, 225, 255, 0.6); color: rgb(32, 46, 64);'>戦闘前</th><th width='300' style='background-color: rgba(225, 225, 255, 0.6); color: rgb(32, 46, 64);'>戦闘後</th></tr>"
//    <tr><th class="effect" align="left"><img src="/SoLA/img/support.png" width="20" height="20" style="vertical-align:middle;" title="サポート"> <a href="/../SoLA/main.php?id=352">レグル</a><br>HP:38922<font style="font-size: 10px;">　(300 %)</font><br>SP:658<font style="font-size: 10px;">　(200 %)</font><span class="noweffect"><font class="other">疲労：0</font><br><font class="other" style="font-size: 10px;">HPR : 100% / SPR : 100% / <br>ATK : 100% / DEF : 100% / <br>HIT : 100% / EVA : 100% / <br>CRI : 100% / CD  : 100% / <br>MATK: 100% / MDEF: 100% / <br>MHIT: 100% / MEVA: 100% / <br>MCRI: 100% / MCD : 100% / <br>SPD : 100% / HEAL: 100% / <br>HATE: 100%</font></span></th></tr>
//<tr><th>1</th><th width="60"><a href="/../SoLA/main.php?id=143"><img src="http://tyaunen.moo.jp/txiloda/picture.php?user=1146&amp;file=picture058.png" width="60" height="60" style="vertical-align:middle;">
//</tbody></table>"

        var firstturn_partydata = $(".teamleft").first().find(".effect");
        var lastturn_partydata = $(".teamleft").last().find(".effect");

        //　人数は変わらないはずなのでいっぺんに……
        for (let i = 0; i < firstturn_partydata.length; i++) {
            //　開始時状態
            var charaname = $(firstturn_partydata[i]).find("a").text()
            upperHTML += "<tr><th width='200'>" + charaname + "</th>";
            var charatext = $(firstturn_partydata[i]).text();
            //　HP
            var param = RegExp('HP:-?[0-9]*', 'g');
            result = charatext.match(param);
            if (result != null) {
                var chara_prehp = result[0];
            }
            //　SP
            param = RegExp('SP:-?[0-9]*', 'g');
            result = charatext.match(param);
            if (result != null) {
                var chara_presp = result[0];
            }
            //　変調
            var hentyo_p_pre = "";
            param = RegExp('(猛毒|衰弱|麻痺|火傷)：[0-9]*', 'g');
            result = charatext.match(param);
            if(result != null){
                for (let i = 0; i < result.length; i++){
                    hentyo_p_pre += result[i] + "　";
                }
            }
            var hentyo_m_pre = "";
            param = RegExp('(魅了|呪縛|混乱|狼狽)：[0-9]*', 'g');
            result = charatext.match(param);
            if(result != null){
                for (let i = 0; i < result.length; i++){
                    hentyo_m_pre += result[i] + "　";
                }
            }
            upperHTML += "<th width='300' align='left'>" + chara_prehp + "<br>" + chara_presp + "<br><span style='color: red;'>肉→" + hentyo_p_pre + "</span><br><span style='color: darkcyan;'>精→" + hentyo_m_pre + "</span></th>";

            //　終了時状態
            charatext = $(lastturn_partydata[i]).text();
            //　HP
            upperHTML += "<th width='300' align='left'>"
            param = RegExp('HP:-?[0-9]*', 'g');
            result = charatext.match(param);
            if (result != null) {
                var chara_posthp = result[0];
                //　前後で比較する
                var prehp = chara_prehp.replace("HP:", "");
                prehp = parseInt(prehp, 10);
                var posthp = chara_posthp.replace("HP:", "");
                posthp = parseInt(posthp, 10);
                //　差異によって色分け
                if (prehp == posthp){
                    upperHTML += "<span style='color:#ffffff;'>" + chara_posthp + "</span>";
                }
                if (prehp > posthp){
                    upperHTML += "<span style='color:#ff4488;'>" + chara_posthp + "</span>";
                }
                if (prehp < posthp){
                    upperHTML += "<span style='color:#00ffff;'>" + chara_posthp + "</span>";
                }
                upperHTML += "<br>";
            }
            //　SP
            param = RegExp('SP:-?[0-9]*', 'g');
            result = charatext.match(param);
            if (result != null) {
                var chara_postsp = result[0];
                //　前後で比較する
                var presp = chara_presp.replace("SP:", "");
                presp = parseInt(presp, 10);
                var postsp = chara_postsp.replace("SP:", "");
                postsp = parseInt(postsp, 10);
                //　差異によって色分け
                if (presp == postsp){
                    upperHTML += "<span style='color:#ffffff;'>" + chara_postsp + "</span>";
                }
                if (presp > postsp){
                    upperHTML += "<span style='color:#ff4488;'>" + chara_postsp + "</span>";
                }
                if (presp < postsp){
                    upperHTML += "<span style='color:#00ffff;'>" + chara_postsp + "</span>";
                }
                upperHTML += "<br>";
            }
            //　変調
            var hentyo_p_post = "";
            param = RegExp('(猛毒|衰弱|麻痺|火傷)：[0-9]*', 'g');
            result = charatext.match(param);
            if (result != null){
                for (let i = 0; i < result.length; i++){
                    hentyo_p_post += result[i] + "　";
                }
            }
            var hentyo_m_post = "";
            param = RegExp('(魅了|呪縛|混乱|狼狽)：[0-9]*', 'g');
            result = charatext.match(param);
            if (result != null){
                for (let i = 0; i < result.length; i++){
                    hentyo_m_post += result[i] + "　";
                }
            }
            upperHTML += "<span style='color: red;'>肉→" + hentyo_p_post + "</span><br><span style='color: darkcyan;'>精→" + hentyo_m_post + "</span></th></tr>";
        }

        upperHTML += "</tbody></table>"
        $("#main > div.center").before(upperHTML);

    }

    // Your code here...
})();
