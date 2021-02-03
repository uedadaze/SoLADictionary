# SoLA絡みの制作物
## SoLADictionary
最終更新: 2021年2月2日9時ごろ

### 概要
Webゲーム[「Story of Lost Artifact」(SoLA)](http://lostartifact.xsrv.jp/SoLA/login.php)用の辞書ファイルです。

Google Chrome/Firefox用拡張機能「Mouse Dictionary」に読み込ませて使うものとなっております。（JSON形式なので他でも使えるかもしれません）

### 含まれる内容
- ゲームシステム上の用語とその解説

- 各種スキル（能力値スキル/章追加スキル/クラススキル/アーティファクトスキル/カードスキル）の名称と効果

- アーティファクトの名称と効果

- スキルカードの名称と収録スキル

- 敵NPCの情報（現在はメインストーリーのみ対応しております）

### 使い方
1. Google ChromeあるいはFirefoxで、[「Mouse Dictionary」](https://mouse-dictionary.netlify.app/ja/)をインストールしてください。
2. ブラウザのツールバーから「Mouse Dictionary」の設定画面を開き、「辞書データの文字コード」を「UTF-8」に、「辞書データの形式」を「JSON」に指定し、「ファイルを選択」ボタンから辞書ファイル（SoLA_Dict.json）を選択してください。その後「LOAD」ボタンを押し、登録完了のダイアログが出たら「OK」ボタンで閉じて下さい。
3. ブラウザのツールバーから「Mouse Dictironary」を起動し、知りたい単語にカーソルを合わせる（あるいはドラッグで選択する）と意味が表示されます。

Discordをブラウザから開けばSoLAのDiscordサーバーでも使えます。

### 注意事項
- 本辞書ファイルは「Story of Lost Artifact」ならびに「Mouse Dictionary」の製作者様とは一切関係はございませんので、本辞書ファイルに関する質問等をお送りすることは絶対におやめ下さい。

- 「Mouse Dictionary」に既に他の辞書ファイルを読み込ませていた場合、本辞書ファイルの内容で上書きされる場合がございます。ご了承の上でお使い下さい（特に和英辞書を使用されている場合はご注意下さい）。

- 性質上辞書ファイルは「Story of Lost Artifact」のネタバレ要素を含みます。

- 本辞書ファイルは細心の注意を払って作成されておりますが、「Story of Lost Artifact」の最新の設定を反映していない場合や、情報に間違いがある場合がございます。ご利用は自己責任でお願いいたします。

### 謝辞

本辞書ファイルの製作にあたっては[Story of Lost Artifact Wiki](https://wikiwiki.jp/sola/)の記述を利用させていただいております。Wikiの編集に携わっておられます全ての方々にこの場を借りてお礼申し上げます。

### 製作者

切り株（Twitter: @BehindForestBoy／SoLAのDiscordサーバーにも常駐しております）

## DontTellMeAboutChallangeDungeon.user.js

最終更新 2021年2月3日

Tampermonkey/Greasemonkey用スクリプトです。

ゲーム中の「チャレンジダンジョン」に関する情報をすべて隠します。具体的には、

- メニューから「チャレンジダンジョン」の項目を削除します。

- プロフィールページのチャレンジダンジョン最深到達階に関する記述を隠します。

