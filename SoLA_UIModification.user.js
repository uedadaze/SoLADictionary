// ==UserScript==
// @name         SoLA_UIModification
// @namespace    http://tampermonkey.net/
// @version      0.2
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

    //　チャットページ
    //　下にあるページ切り替えリンクを画面上部にもコピーする
    if ( url.match(new RegExp('chat.php')) != null ) {
        var favlinks = $("table[style='table-layout: fixed;']");
        var linkHTML = $('a[href$="p=1"]').parent().parent().prop('outerHTML');
        $("table[style='table-layout: fixed;'][align='center']:eq(1)").before(linkHTML);
    }

    //　戦闘ページ
    //　下にある結果一覧を上にもコピーする。また、ホーム画面や戦闘ログ画面に移行するためのリンクを追加する
    if ( url.match(new RegExp('/battle/')) != null ) {
        //　ログを得る
        var tex = $("#main").text();
        //　結果部分HTML
        var upperHTML = "戦闘結果:<br>";
        //　戦闘結果を検索（テキストむき出しなのでこうしないと取ってこれない）
        var reg = RegExp('(.*チームの勝利！|引き分け！|ステータスポイントを[0-9]*取得した！|ギルドメダルを[0-9]*枚取得した！|メルを.*mel取得した！|追加の基本スキルを習得した！|名声を[0-9]*獲得した！|スキルカード【.*】を獲得した！|.*を手に入れた！|持ち物がいっぱいだった！自動的に解放された！|称号.*を手に入れた！)', 'g');
        var result = tex.match(reg);
        for (const element of result) {
            upperHTML += element + "<br>";
        }
        //　リンクを追加
        upperHTML += "<br><a href='/../SoLA/battlelog.php'>戦闘ログ一覧へ移動</a><br><br>";
        upperHTML += "<a href='/../SoLA/main.php'>ホーム画面に戻る</a>";
        //　ページに挿入して終了
        $("#main > div.center").before(upperHTML);
    }

    //　チャレダンページ
    //　結果と戻るリンクのコピーに加え、戦闘前後での状態の変化を記述する
    if ( url.match(new RegExp('/battle.php')) != null ) {
        //　チャレダンメニューを上へ
        tex = $("#main").text()
        upperHTML = "戦闘結果:<br>";

        //　勝敗の結果
        reg = RegExp('(バトルに勝利した！|バトルに引き分けた……|バトルに敗北した……|記録：[0-9]*階)', 'g');
        result = tex.match(reg);
        for (const element of result) {
            upperHTML += element + "<br>";
        }
        upperHTML += "<br><a href='http://lostartifact.xsrv.jp/SoLA/infinity.php'>チャレンジダンジョンメニューに戻る</a><br><br>"

        //　味方の状態変化の記録
        upperHTML += "<table border='1' bordercolor='#AAAAAA' style='color: brown; background-color: #FFFFFF'><tbody><tr><th width='200' style='background-color: rgba(225, 225, 255, 0.6); color: rgb(32, 46, 64);'>キャラ名</th><th width='300' style='background-color: rgba(225, 225, 255, 0.6); color: rgb(32, 46, 64);'>戦闘前</th><th width='300' style='background-color: rgba(225, 225, 255, 0.6); color: rgb(32, 46, 64);'>戦闘後</th></tr>"
        var firstturn_partydata = $(".teamleft").first().find(".effect");
        var lastturn_partydata = $(".teamleft").last().find(".effect");

        //　人数は変わらないはずなのでいっぺんに
        //　（将来的にメンバーを戦闘から追放する、みたいなスキルが出現した場合はまた考えます）
        for (let i = 0; i < firstturn_partydata.length; i++) {
            // キャラクター名取得
            var charaname = $(firstturn_partydata[i]).find("a").text()
            upperHTML += "<tr><th width='200'>" + charaname + "</th>";
            //　戦闘開始前後のテキスト
            var firstturn_charatext = $(firstturn_partydata[i]).text();
            var lastturn_charatext = $(lastturn_partydata[i]).text();
            //　前後でのHPの比較
            reg = RegExp('HP:-?[0-9]*', 'g');
            result = firstturn_charatext.match(reg);
            var chara_prehp = result ? parseInt(result[0].replace("HP:", ""), 10) : "HPを取得できませんでした";
            result = lastturn_charatext.match(reg);
            var chara_posthp = result ? parseInt(result[0].replace("HP:", ""), 10) : "HPを取得できませんでした";
            if (!Number.isNaN(chara_prehp) && !Number.isNaN(chara_posthp)){
                //　HPが同値なら黒、増えていれば青、少なくなっていれば赤で表記
                var hpcolor = "";
                if (chara_prehp == chara_posthp){ hpcolor = "#000000"; }
                if (chara_prehp > chara_posthp){ hpcolor = "#ff2266"; }
                if (chara_prehp < chara_posthp){ hpcolor = "#0088ff"; }
            }
            //　SPもHPと同様に比較する
            reg = RegExp('SP:-?[0-9]*', 'g');
            result = firstturn_charatext.match(reg);
            var chara_presp = result ? parseInt(result[0].replace("SP:", ""), 10) : "SPを取得できませんでした";
            result = lastturn_charatext.match(reg);
            var chara_postsp = result ? parseInt(result[0].replace("SP:", ""), 10) : "SPを取得できませんでした";
            if (!Number.isNaN(chara_presp) && !Number.isNaN(chara_postsp)){
                var spcolor = "";
                if (chara_presp == chara_postsp){ spcolor = "#000000"; }
                if (chara_presp > chara_postsp){ spcolor = "#ff2266"; }
                if (chara_presp < chara_postsp){ spcolor = "#0088ff"; }
            }
            //　肉体変調
            reg = RegExp('(猛毒|衰弱|麻痺|火傷)：[0-9]*', 'g');
            //　前
            var hentyo_p_pre = "";
            result = firstturn_charatext.match(reg);
            if (result != null){ for (const element of result){ hentyo_p_pre += element + "　"; } }
            //　後
            var hentyo_p_post = "";
            result = lastturn_charatext.match(reg);
            if (result != null){ for (const element of result){ hentyo_p_post += element + "　"; } }
            //　精神変調
            reg = RegExp('(魅了|呪縛|混乱|狼狽)：[0-9]*', 'g');
            //　前
            var hentyo_m_pre = "";
            result = firstturn_charatext.match(reg);
            if (result != null){ for (const element of result){ hentyo_m_pre += element + "　"; } }
            //　後
            var hentyo_m_post = "";
            result = lastturn_charatext.match(reg);
            if (result != null) { for (const element of result){ hentyo_m_post += element + "　"; } }
            // HTML出力
            upperHTML += "<th width='300' align='left'>HP:" + chara_prehp + "<br>SP:" + chara_presp + "<br><span style='color: red;'>肉→" + hentyo_p_pre + "</span><br><span style='color: darkcyan;'>精→" + hentyo_m_pre + "</span></th>";
            upperHTML += "<th width='300' align='left'><span style='color: " + hpcolor + ";'>HP:" + chara_posthp + "<br><span style='color: " + spcolor + ";'>SP:" + chara_postsp + "<br><span style='color: red;'>肉→" + hentyo_p_post + "</span><br><span style='color: darkcyan;'>精→" + hentyo_m_post + "</span></th></tr>";
        }

        upperHTML += "</tbody></table>"
        $("#main > div.center").before(upperHTML);

    }

    // Your code here...
})();
