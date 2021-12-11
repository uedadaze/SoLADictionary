# SoLA絡みの製作物

Webゲーム[「Story of Lost Artifact」(SoLA)](http://lostartifact.xsrv.jp/SoLA/login.php)のゲームプレイを補助する目的の製作物を公開しております。

製作者はSoLA公式とは一切関係がございません。本ページの製作物についてSoLA公式に問い合わせを行うことは絶対におやめください。ご意見ご質問、バグ報告に関しては切り株（Twitter: @BehindForestBoy／SoLAのDiscordサーバーにも常駐しております）までお願いいたします。

ここで公開されております製作物についてはいずれも自己責任のもとでのご使用をお願いいたします。

- [SoLA_Dict](#SoLA_Dict)
  - SoLAの用語を収録したMouse Dictionary用辞書ファイル。
- [SoLA_DontTellMeAboutChallangeDungeon](#SoLA_DontTellMeAboutChallangeDungeon)
  - チャレンジダンジョンに関する記述を隠すためのTampermonkey/Greasemonkey用スクリプト。
- [SoLA_UIModification](#SoLA_UIModification)
  - SoLAのUIの利便性を向上させる修正を施すTampermonkey/Greasemonkey用スクリプト。
- [SoLA_SakadachiLog](#SoLA_SakadachiLog)
  - SoLAのチャットログの順番を反転させ、保存に適した状態にする機能を追加するTampermonkey/Greasemonkey用スクリプト。

## SoLA_Dict

### 概要
SoLA用の辞書ファイルです。Google Chrome/Firefox用拡張機能「Mouse Dictionary」に読み込ませて使うものとなっております。（JSON形式なので他でも使えるかもしれません）

### 含まれる内容
- ゲームシステム上の用語とその解説
- 各種スキル（能力値スキル/章追加スキル/クラススキル/アーティファクトスキル/カードスキル）の名称と効果
- アーティファクトの名称と効果
- スキルカードの名称と収録スキル

（※敵NPCに関する情報は削除しました。需要があれば復活を検討いたします）

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

## SoLA_DontTellMeAboutChallangeDungeon

### 概要

Tampermonkey/Greasemonkey用スクリプトです。使用中はゲーム中の「チャレンジダンジョン」に関する情報をすべて隠します。具体的には、

- メニューから「チャレンジダンジョン」の項目を削除します。
- プロフィールページのチャレンジダンジョン最深到達階に関する記述を隠します。

チャットにおけるチャレンジダンジョン関連の発言は隠せませんので、そちらはゲーム中のミュート機能をお使いいただきますようお願い申し上げます。

### 使い方

1. Tampermonkey/Greasemonkeyをまだインストールしていない場合は、インストールしてください。
2. 本ページの上の方にあるファイル一覧から「SoLA_DontTellMeAboutChallangeDungeon.user.js」を開いて下さい。
3. 右上の方にある「raw」ボタンを押して下さい。自動的にTampermonkey/Greasemonkeyのスクリプトインストール画面に移行します。「インストール」ボタンを押せばインストール完了です。
4. スクリプトをOFFにしたい場合はTampermonkey/Greasemonkeyの「インストール済み UserScript」タブから行って下さい。

## SoLA_UIModification

### 概要

Tampermonkey/Greasemonkey用スクリプトです。SoLAのUIの利便性を向上させるためのいくつかの変更がなされます。現在の変更点については以下のとおりです。

- あんまりスクロールしなくてよくなります。
  - チャット画面で、最下部にあるページ切り替えリンクが、画面上部（お気に入り登録したルーム一覧などがある所の一段下）にも表示されるようになります。
  - 戦闘結果ページで、勝敗／戦利品に関する記述・ホーム画面に戻るリンクが、ページ最上部にも表示されるようになります。また、戦闘ログ一覧画面に進むリンクも追加されます。
    - チャレンジダンジョンでは戦闘前後でのPT状況の変化も表示されます。

### 使い方

1. Tampermonkey/Greasemonkeyをまだインストールしていない場合は、インストールしてください。
2. 本ページの上の方にあるファイル一覧から「SoLA_UIModification.user.js」を開いて下さい。
3. 右上の方にある「raw」ボタンを押して下さい。自動的にTampermonkey/Greasemonkeyのスクリプトインストール画面に移行します。「インストール」ボタンを押せばインストール完了です。
4. スクリプトをOFFにしたい場合はTampermonkey/Greasemonkeyの「インストール済み UserScript」タブから行って下さい。

## SoLA_SakadachiLog

### 概要

Tampermonkey/Greasemonkey用スクリプトです。
チャット画面に「ログを反転！」ボタンを追加します。押すとチャットログの順番が逆転し、上から下に読む形にできます。もう一度押すと元に戻ります。チャットログを保存したい際にお使いください。

### 使い方

1. Tampermonkey/Greasemonkeyをまだインストールしていない場合は、インストールしてください。
2. 本ページの上の方にあるファイル一覧から「SoLA_SakadachiLog.user.js」を開いて下さい。
3. 右上の方にある「raw」ボタンを押して下さい。自動的にTampermonkey/Greasemonkeyのスクリプトインストール画面に移行します。「インストール」ボタンを押せばインストール完了です。
4. スクリプトをOFFにしたい場合はTampermonkey/Greasemonkeyの「インストール済み UserScript」タブから行って下さい。
