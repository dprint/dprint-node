/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.19.3(4bbae4b7d81ecff78ba65ddc8227b542e734257e)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.ja",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (再発)","{0} (発生 {1} 回目)"],"vs/base/browser/ui/findinput/findInput":["入力"],"vs/base/browser/ui/findinput/findInputCheckboxes":["大文字と小文字を区別する","単語単位で検索する","正規表現を使用する"],"vs/base/browser/ui/findinput/replaceInput":["入力","保持する"],"vs/base/browser/ui/inputbox/inputBox":["エラー: {0}","警告: {0}","情報: {0}"],"vs/base/browser/ui/keybindingLabel/keybindingLabel":["バインドなし"],"vs/base/browser/ui/list/listWidget":["{0}。移動キーを使用して移動します。"],"vs/base/browser/ui/menu/menu":["{0} ({1})"],"vs/base/browser/ui/tree/abstractTree":["クリア","型のフィルターを無効にする","型のフィルターを有効にする","要素が見つかりません","{1} 個の要素のうち {0} 個の要素が一致しました"],"vs/base/common/keybindingLabels":["Ctrl","Shift","Alt","Windows","Ctrl","Shift","Alt","Super","Control","Shift","Alt","コマンド","Control","Shift","Alt","Windows","Control","Shift","Alt","Super"],"vs/base/common/severity":["エラー","警告","情報"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}、選択","選択"],
"vs/base/parts/quickopen/browser/quickOpenWidget":["クイック選択。入力すると結果が絞り込まれます。","クイック選択","{0} 件の結果"],"vs/editor/browser/controller/coreCommands":["すべて選択(&&S)","元に戻す(&&U)","やり直し(&&R)"],"vs/editor/browser/controller/textAreaHandler":["現在エディターにアクセスすることはできません。 Alt + F1 キーを押してオプションを選択します。"],"vs/editor/browser/widget/codeEditorWidget":["カーソルの数は {0} 個に制限されています。"],"vs/editor/browser/widget/diffEditorWidget":["一方のファイルが大きすぎるため、ファイルを比較できません。"],"vs/editor/browser/widget/diffReview":["閉じる","行なし","1 行","{0} 行","{1} の差異 {0}: 変更前 {2}, {3}, 変更後 {4}, {5}","空白","変更前の {0}、変更後の {1}: {2}","+ 変更後の {0}: {1}","- 変更前の {0}: {1}","次の差分に移動","前の差分に移動"],"vs/editor/browser/widget/inlineDiffMargin":["削除された行のコピー","削除された行のコピー","削除された行のコピー ({0})","この変更を元に戻す","削除された行のコピー ({0})"],
"vs/editor/common/config/commonEditorConfig":["エディター","1 つのタブに相当するスペースの数。`#editor.detectIndentation#` がオンの場合、この設定はファイル コンテンツに基づいて上書きされます。","`Tab` キーを押すとスペースが挿入されます。`#editor.detectIndentation#` がオンの場合、この設定はファイル コンテンツに基づいて上書きされます。","ファイルがファイルの内容に基づいて開かれる場合、`#editor.tabSize#` と `#editor.insertSpaces#` を自動的に検出するかどうかを制御します。","自動挿入された末尾の空白を削除します。","大きなファイルでメモリが集中する特定の機能を無効にするための特別な処理。","ドキュメント内の単語に基づいて入力候補を計算するかどうかを制御します。","エディターのコンテンツをダブルクリックするか、`Escape` キーを押しても、ピーク エディターを開いたままにします。","この長さを越える行は、パフォーマンス上の理由によりトークン化されません。","差分計算が取り消された後のタイムアウト (ミリ秒単位)。タイムアウトなしには 0 を使用します。","差分エディターが差分を横に並べて表示するか、行内に表示するかを制御します。","差分エディターが、先頭または末尾の空白の変更を差分として表示するかどうかを制御します。","差分エディターが追加/削除された変更に +/- インジケーターを示すかどうかを制御します。"],
"vs/editor/common/config/editorOptions":["エディターはスクリーン リーダーがいつ接続されたかを検出するためにプラットフォーム API を使用します。","エディターは永続的にスクリーン リーダー向けに最適化されます。","エディターはスクリーン リーダー向けに最適化されません。","エディターをスクリーン リーダーに最適化されたモードで実行するかどうかを制御します。","選択範囲を指定しないでコピーする場合に現在の行をコピーするかどうかを制御します。","エディターの選択範囲から検索ウィジェット内の検索文字列を与えるかどうかを制御します。","[選択範囲を検索] を自動的にオンにしない (既定)","[選択範囲を検索] を常に自動的にオンにする","複数行のコンテンツが選択されている場合は、自動的に [選択範囲を検索] をオンにします。","エディターでの検索操作の実行対象を、選択したテキストとファイル全体のどちらにするかを制御します。","macOS で検索ウィジェットが共有の検索クリップボードを読み取りまたは変更するかどうかを制御します。","検索ウィジェットがエディターの上に行をさらに追加するかどうかを制御します。true の場合、検索ウィジェットが表示されているときに最初の行を超えてスクロールできます。","フォントの合字を有効/無効にします。","明示的なフォント機能設定。","フォントの合字を構成します。","フォント サイズ (ピクセル単位) を制御します。","結果のピーク ビューを表示 (既定)","主な結果に移動し、ピーク ビューを表示します","プライマリ結果に移動し、他のユーザーへのピークレス ナビゲーションを有効にします","この設定は非推奨です。代わりに、'editor.editor.gotoLocation.multipleDefinitions' や 'editor.editor.gotoLocation.multipleImplementations' などの個別の設定を使用してください。","複数のターゲットの場所があるときの '定義へ移動' コマンドの動作を制御します。","複数のターゲットの場所があるときの '型定義へ移動' コマンドの動作を制御します。","複数のターゲットの場所があるときの '宣言へ移動' コマンドの動作を制御します。","複数のターゲットの場所があるときの '実装に移動' コマンドの動作を制御します。","ターゲットの場所が複数存在する場合の '参照へ移動' コマンドの動作を制御します。","'定義へ移動' の結果が現在の場所である場合に実行される代替コマンド ID。","'型定義へ移動' の結果が現在の場所である場合に実行される代替コマンド ID。","'宣言へ移動' の結果が現在の場所である場合に実行される代替コマンド ID。","'実装へ移動' の結果が現在の場所である場合に実行される代替コマンド ID。","'参照へ移動' の結果が現在の場所である場合に実行される代替コマンド ID。","ホバーを表示するかどうかを制御します。","ホバーを表示後の待ち時間 (ミリ秒) を制御します。","ホバーにマウスを移動したときに、ホバーを表示し続けるかどうかを制御します。","エディターでコード アクションの電球を有効にします。","行の高さを制御します。フォント サイズに基づいて行の高さを計算する場合には、0 を使用します。","ミニマップを表示するかどうかを制御します。","ミニマップを表示する場所を制御します。","ミニマップ スライダーを表示するタイミングを制御します。","ミニマップに描画されるコンテンツのスケール。","行にカラー ブロックではなく実際の文字を表示します。","表示するミニマップの最大幅を特定の列数に制限します。","入力時にパラメーター ドキュメントと型情報を表示するポップアップを有効にします。","パラメーター ヒント メニューを周回するか、リストの最後で閉じるかどうかを制御します。","文字列内でクイック候補を有効にします。","コメント内でクイック候補を有効にします。","文字列およびコメント外でクイック候補を有効にします。","入力中に候補を自動的に表示するかどうかを制御します。","行番号は表示されません。","行番号は、絶対値として表示されます。","行番号は、カーソル位置までの行数として表示されます。","行番号は 10 行ごとに表示されます。","行番号の表示を制御します。","特定の等幅文字数の後に垂直ルーラーを表示します。複数のルーラーには複数の値を使用します。配列が空の場合はルーラーを表示しません。","カーソルの右のテキストを上書きせずに候補を挿入します。","候補を挿入し、カーソルの右のテキストを上書きします。","入力候補を受け入れるときに単語を上書きするかどうかを制御します。これは、この機能の利用を選択する拡張機能に依存することにご注意ください。","入力候補を受け入れている間の予期しないテキストの変更を強調表示するかどうかを制御します。たとえば、`insertMode` は `replace` ですが、入力候補は `insert` のみをサポートしています。","候補のフィルター処理と並び替えでささいな入力ミスを考慮するかどうかを制御します。","並べ替えがカーソル付近に表示される単語を優先するかどうかを制御します。","保存された候補セクションを複数のワークプレースとウィンドウで共有するかどうかを制御します (`#editor.suggestSelection#` が必要)。","アクティブなスニペットがクイック候補を止めるかどうかを制御します。","提案のアイコンを表示するか、非表示にするかを制御します。","スクロール バーを表示する前に IntelliSense が表示する候補の数を制御します (最大 15 個)。","この設定は非推奨です。代わりに、'editor.suggest.showKeywords' や 'editor.suggest.showSnippets' などの個別の設定を使用してください。","有効にすると、IntelliSense に `メソッド` 候補が表示されます。","有効にすると、IntelliSense に `関数` 候補が表示されます。","有効にすると、IntelliSense に `コンストラクター` 候補が表示されます。","有効にすると、IntelliSense に `フィールド` 候補が表示されます。","有効にすると、IntelliSense に `変数` 候補が表示されます。","有効にすると、IntelliSense に 'クラス' 候補が表示されます。","有効にすると、IntelliSense に `構造体` 候補が表示されます。","有効にすると、IntelliSense に `インターフェイス` 候補が表示されます。","有効にすると、IntelliSense に `モジュール` 候補が表示されます。","有効にすると、IntelliSense に `プロパティ` 候補が表示されます。","有効にすると、IntelliSense に `イベント` 候補が表示されます。","有効にすると、IntelliSense に `演算子` 候補が表示されます。","有効にすると、IntelliSense に `ユニット` 候補が表示されます。","有効にすると、IntelliSense に `値` 候補が表示されます。","有効にすると、IntelliSense に `定数` 候補が表示されます。","有効にすると、IntelliSense に `列挙型` 候補が表示されます。","有効にすると、IntelliSense に `enumMember` 候補が表示されます。","有効にすると、IntelliSense に `キーワード` 候補が表示されます。","有効にすると、IntelliSense に 'テキスト' -候補が表示されます。","有効にすると、IntelliSense に `色` 候補が表示されます。","有効にすると、IntelliSense に 'ファイル' 候補が表示されます。","有効にすると、IntelliSense に `参照` 候補が表示されます。","有効にすると、IntelliSense に `customcolor` 候補が表示されます。","有効にすると、IntelliSense に `フォルダー` 候補が表示されます。","有効にすると、IntelliSense に `typeParameter` 候補が表示されます。","有効にすると、IntelliSense に `スニペット` 候補が表示されます。","コミット文字で候補を受け入れるかどうかを制御します。たとえば、JavaScript ではセミコロン (`;`) をコミット文字にして、候補を受け入れてその文字を入力することができます。","テキストの変更を行うとき、`Enter` を使用する場合にのみ候補を受け付けます。","`Tab` キーに加えて `Enter` キーで候補を受け入れるかどうかを制御します。改行の挿入や候補の反映の間であいまいさを解消するのに役立ちます。","スクリーン リーダーで読み上げることができるエディターの行数を制御します。警告: 既定値を上回る数を指定すると、パフォーマンスに影響を与えます。","エディターのコンテンツ","言語設定を使用して、いつかっこを自動クローズするか決定します。","カーソルが空白文字の左にあるときだけ、かっこを自動クローズします。","エディターで左角かっこを追加した後に自動的に右角かっこを挿入するかどうかを制御します。","終わり引用符または括弧が自動的に挿入された場合にのみ、それらを上書きします。","エディターで終わり引用符または括弧を上書きするかどうかを制御します。","言語設定を使用して、いつ引用符を自動クローズするか決定します。","カーソルが空白文字の左にあるときだけ、引用符を自動クローズします。","ユーザーが開始引用符を追加した後、エディター自動的に引用符を閉じるかどうかを制御します。","エディターはインデントを自動的に挿入しません。","エディターは、現在の行のインデントを保持します。","エディターは、現在の行のインデントを保持し、言語が定義されたかっこを優先します。","エディターは、現在の行のインデントを保持し、言語が定義されたかっこを優先し、言語で定義された特別な onEnterRules を呼び出します。","エディターは、現在の行のインデントを保持し、言語が定義されたかっこを優先し、言語で定義された特別な onEnterRules を呼び出し、言語で定義された indentationRules を優先します。","ユーザーが行を入力、貼り付け、移動、またはインデントするときに、エディターでインデントを自動的に調整するかどうかを制御します。","言語構成を使用して、選択範囲をいつ自動的に囲むかを判断します。","角かっこではなく、引用符で囲みます。","引用符ではなく、角かっこで囲みます。","エディターが自動的に選択範囲を囲む必要があるかどうかを制御します。","エディターで CodeLens を表示するかどうかを制御します。","エディターでインライン カラー デコレーターと色の選択を表示する必要があるかどうかを制御します。","構文ハイライトをクリップボードにコピーするかどうかを制御します。","カーソルのアニメーション方式を制御します。","滑らかなキャレットアニメーションを有効にするかどうかを制御します。","カーソルのスタイルを制御します。","カーソル前後の表示可能な先頭と末尾の行の最小数を制御します。他の一部のエディターでは 'scrollOff' または `scrollOffset` と呼ばれます。","`cursorSurroundingLines` は、キーボードまたは API でトリガーされた場合にのみ強制されます。","`cursorSurroundingLines` は常に適用されます。","'カーソルの周囲の行' を適用するタイミングを制御します。","`#editor.cursorStyle#` が `line` に設定されている場合、カーソルの幅を制御します。","ドラッグ アンド ドロップによる選択範囲の移動をエディターが許可するかどうかを制御します。","`Alt` を押すと、スクロール速度が倍増します。","エディターでコードの折りたたみを有効にするかどうかを制御します。","折りたたみ範囲の計算方式を制御します。`auto` は利用可能であれば言語固有の折りたたみ方式を使用します。`indentation` はインデントに基づく折りたたみ方式を使用します。","フォント ファミリを制御します。","フォントの太さを制御します。","貼り付けた内容がエディターにより自動的にフォーマットされるかどうかを制御します。フォーマッタを使用可能にする必要があります。また、フォーマッタがドキュメント内の範囲をフォーマットできなければなりません。","エディターで入力後に自動的に行のフォーマットを行うかどうかを制御します。","エディターで縦のグリフ余白が表示されるかどうかを制御します。ほとんどの場合、グリフ余白はデバッグに使用されます。","概要ルーラーでカーソルを非表示にするかどうかを制御します。","エディターでアクティブなインデントのガイドを強調表示するかどうかを制御します。","文字間隔 (ピクセル単位) を制御します。","エディターがリンクを検出してクリック可能な状態にするかどうかを制御します。","対応するかっこを強調表示します。","マウス ホイール スクロール イベントの `deltaX` と `deltaY` で使用される乗数。","`Ctrl` キーを押しながらマウス ホイールを使用してエディターのフォントをズームします。","複数のカーソルが重なっているときは、マージします。","Windows および Linux 上の `Control` キーと macOS 上の `Command` キーに割り当てます。","Windows および Linux 上の `Alt` キーと macOS 上の `Option` キーに割り当てます。","マウスを使用して複数のカーソルを追加するときに使用する修飾キーです。「定義に移動」や「リンクを開く」のマウス操作は、マルチカーソルの修飾キーと競合しないように適用されます。[詳細](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier)","カーソルごとにテキストを 1 行ずつ貼り付けます。","各カーソルは全文を貼り付けます。","貼り付けたテキストの行数がカーソル数と一致する場合の貼り付けを制御します。","エディターでセマンティック シンボルの出現箇所を強調表示するかどうかを制御します。","概要ルーラーの周囲に境界線が描画されるかどうかを制御します。","クイック候補が表示されるまでのミリ秒を制御します。","エディターで制御文字を表示するかどうかを制御します。","エディターでインデント ガイドを表示するかどうかを制御します。","ファイルの末尾が改行の場合は、最後の行番号を表示します。","余白と現在の行を強調表示します。","エディターが現在の行をどのように強調表示するかを制御します。","Render whitespace characters except for single spaces between words.","選択したテキストにのみ空白文字を表示します。","エディターで空白文字を表示するかどうかを制御します。","選択範囲の角を丸くするかどうかを制御します。","エディターが水平方向に余分にスクロールする文字数を制御します。","エディターが最後の行を越えてスクロールするかどうかを制御します。","Linux の PRIMARY クリップボードをサポートするかどうかを制御します。","エディターが選択項目と類似の一致項目を強調表示するかどうかを制御します。","余白上の折りたたみコントロールを自動的に非表示にするかどうかを制御します。","使用されていないコードのフェードアウトを制御します。","他の候補の上にスニペットの候補を表示します。","他の候補の下にスニペットの候補を表示します。","他の候補と一緒にスニペットの候補を表示します。","スニペットの候補を表示しません。","他の修正候補と一緒にスニペットを表示するかどうか、およびその並び替えの方法を制御します。","アニメーションでエディターをスクロールするかどうかを制御します。","候補ウィジェットのフォント サイズ。`0` に設定すると、`#editor.fontSize#` の値が使用されます。","候補ウィジェットの行の高さ。`0` に設定すると、`#editor.lineHeight#` の値が使用されます。","トリガー文字の入力時に候補が自動的に表示されるようにするかどうかを制御します。","常に最初の候補を選択します。","`console.| -> console.log` などと選択対象に関して入力しない限りは、最近の候補を選択します。`log` は最近完了したためです。","これらの候補を完了した以前のプレフィックスに基づいて候補を選択します。例: `co -> console` および `con -> const`。","候補リストを表示するときに候補を事前に選択する方法を制御します。","タブ補完は、tab キーを押したときに最適な候補を挿入します。","タブ補完を無効にします。","プレフィックスが一致する場合に、タブでスニペットを補完します。'quickSuggestions' が無効な場合に最適です。","タブ補完を有効にします。","空白の挿入や削除はタブ位置に従って行われます。","単語に関連したナビゲーションまたは操作を実行するときに、単語の区切り文字として使用される文字。","行を折り返しません。","行をビューポートの幅で折り返します。","`#editor.wordWrapColumn#` で行を折り返します。","ビューポートと `#editor.wordWrapColumn#` の最小値で行を折り返します。","行の折り返し方法を制御します。","`#editor.wordWrap#` が `wordWrapColumn` または `bounded` の場合に、エディターの折り返し桁を制御します。","インデントしません。 折り返し行は列 1 から始まります。","折り返し行は、親と同じインデントになります。","折り返し行は、親 +1 のインデントになります。","折り返し行は、親 +2 のインデントになります。","折り返し行のインデントを制御します。"],
"vs/editor/common/modes/modesRegistry":["プレーンテキスト"],
"vs/editor/common/standaloneStrings":["選択されていません","行 {0}、列 {1} ({2} 個選択済み)","行 {0}、列 {1}","{0} 個の選択項目 ({1} 文字を選択)","{0} 個の選択項目","`accessibilitySupport` 設定を 'on' に変更しています。","エディターのアクセシビリティに関連するドキュメント ページを開いています。","差分エディターの読み取り専用ウィンドウ内。","差分エディターのウィンドウ内。","読み取り専用コード エディター内","コード エディター内","エディターを構成してスクリーン エディターで使用するように最適化するには、Command+E を押してください。","エディターを構成してスクリーン リーダーで使用するように最適化するには、Control+E を押します。","エディターは、スクリーン リーダーで使用するよう最適化されるように構成されています。","エディターは、スクリーン リーダーで使用するよう最適化されないように構成されていますが、現時点でこの設定は当てはまりません。","現在のエディターで Tab キーを押すと、次のフォーカス可能な要素にフォーカスを移動します。{0} を押すと、この動作が切り替わります。","現在のエディターで Tab キーを押すと、次のフォーカス可能な要素にフォーカスを移動します。コマンド {0} は、キー バインドでは現在トリガーできません。","現在のエディターで Tab キーを押すと、タブ文字が挿入されます。{0} を押すと、この動作が切り替わります。","現在のエディターで Tab キーを押すと、タブ文字が挿入されます。コマンド {0} は、キー バインドでは現在トリガーできません。","エディターのアクセシビリティに関する詳細情報が記されたブラウザー ウィンドウを開くには、Command+H を押してください。","エディターのアクセシビリティに関する詳細情報が記されたブラウザー ウィンドウを開くには、Control+H を押してください。","Esc キー か Shift+Esc を押すと、ヒントを消してエディターに戻ることができます。","アクセシビリティのヘルプを表示します","開発者: トークンの検査","行 {0} 文字 {1} へ移動","行 {0} へ移動","移動先の行番号を 1 ～ {0} の範囲で入力してください","移動先を 1 から {0} までの文字で入力","現在の行: {0}。 {1} 行目に移動。","移動先の行番号と、必要な場合はその後にコロンと文字番号を入力してください","指定行へ移動...","{0}、{1}、コマンド","{0}、コマンド","実行するアクションの名前を入力","コマンド パレット","{0}、シンボル","移動先の識別子の名前を入力します","シンボルに移動...","シンボル ({0})","モジュール ({0})","クラス ({0})","インターフェイス ({0})","メソッド ({0})","関数 ({0})","プロパティ ({0})","変数 ({0})","変数 ({0})","コンストラクター ({0})","({0}) を呼び出す","エディターのコンテンツ","アクセシビリティ オプションを表示するには Ctrl+F1 を押します。","アクティビティ オプションを表示するには、Alt+F1 キーを押します。","ハイ コントラスト テーマの切り替え","{1} 個のファイルに {0} 個の編集が行われました"],
"vs/editor/common/view/editorColorRegistry":["カーソル位置の行を強調表示する背景色。","カーソル位置の行の境界線を強調表示する背景色。","(Quick Open や検出機能などにより) 強調表示されている範囲の色。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","強調表示された範囲の境界線の背景色。","強調表示された記号の背景色 (定義へ移動、次または前の記号へ移動など)。基になる装飾が覆われないようにするため、色を不透明にすることはできません。","強調表示された記号の周りの境界線の背景色。","エディターのカーソルの色。","選択された文字列の背景色です。選択された文字列の背景色をカスタマイズ出来ます。","エディターのスペース文字の色。","エディター インデント ガイドの色。","アクティブなエディターのインデント ガイドの色。","エディターの行番号の色。","エディターのアクティブ行番号の色","id は使用しないでください。代わりに 'EditorLineNumber.activeForeground' を使用してください。","エディターのアクティブ行番号の色","エディター ルーラーの色。","CodeLens エディターの前景色。","一致するかっこの背景色","一致するかっこ内のボックスの色","概要ルーラーの境界色。","エディターの余白の背景色。余白にはグリフ マージンと行番号が含まれます。","エディターでの不要な (未使用の) ソース コードの罫線の色。","エディター内の不要な (未使用の) ソース コードの不透明度。たとえば、\"#000000c0\" は不透明度 75% でコードを表示します。ハイ コントラストのテーマの場合、'editorUnnecessaryCode.border' テーマ色を使用して、不要なコードをフェードアウトするのではなく下線を付けます。","エラーを示す概要ルーラーのマーカー色。","警告を示す概要ルーラーのマーカー色。","情報を示す概要ルーラーのマーカー色。"],
"vs/editor/contrib/bracketMatching/bracketMatching":["一致するブラケットを示す概要ルーラーのマーカー色。","ブラケットへ移動","ブラケットに選択","ブラケットに移動(&&B)"],"vs/editor/contrib/caretOperations/caretOperations":["キャレットを左に移動","キャレットを右に移動"],"vs/editor/contrib/caretOperations/transpose":["文字の入れ替え"],"vs/editor/contrib/clipboard/clipboard":["切り取り","切り取り(&&T)","コピー","コピー(&&C)","貼り付け","貼り付け(&&P)","構文を強調表示してコピー"],
"vs/editor/contrib/codeAction/codeActionCommands":["実行するコード アクションの種類。","返されたアクションが適用されるタイミングを制御します。","最初に返されたコード アクションを常に適用します。","最初に返されたコード アクション以外に返されたコード アクションがない場合は、そのアクションを適用します。","返されたコード アクションは適用しないでください。","優先コード アクションのみを返すかどうかを制御します。","コード アクションの適用中に不明なエラーが発生しました","クイック フィックス...","利用可能なコード アクションはありません","'{0}' に対して使用できる優先コード アクションがありません","{0}' に対して使用できるコード アクションがありません","使用できる優先コード アクションがありません","利用可能なコード アクションはありません","リファクター...","'{0}' に対して使用できる優先リファクタリングがありません","'{0}' に対して使用できるリファクタリングがありません","使用できる優先リファクタリングがありません","利用可能なリファクタリングはありません","ソース アクション...","'{0}' に対して使用できる優先ソース アクションがありません","'{0}' に対して使用できるソース アクションがありません","使用できる優先ソース アクションがありません","利用可能なソース アクションはありません","インポートを整理","利用可能なインポートの整理アクションはありません","すべて修正","すべてを修正するアクションは利用できません","自動修正...","利用可能な自動修正はありません"],"vs/editor/contrib/codeAction/lightBulbWidget":["修正プログラムを表示します。推奨される利用可能な修正プログラム ({0})","修正プログラム ({0}) を表示する","修正プログラムを表示する"],
"vs/editor/contrib/comment/comment":["行コメントの切り替え","行コメントの切り替え(&&T)","行コメントの追加","行コメントの削除","ブロック コメントの切り替え","ブロック コメントの切り替え(&&B)"],"vs/editor/contrib/contextmenu/contextmenu":["エディターのコンテキスト メニューの表示"],"vs/editor/contrib/cursorUndo/cursorUndo":["カーソルを元に戻す","カーソルのやり直し"],
"vs/editor/contrib/documentSymbols/outlineTree":["配列記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","ブール値記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","クラス記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","色記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","定数記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","コンストラクター記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","列挙子記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","列挙子メンバー記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","イベント記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","フィールド記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","ファイル記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","フォルダー記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","関数記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","インターフェイス記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","キー記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","キーワード記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","メソッド記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","モジュール記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","名前空間記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","Null 記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","数値記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","オブジェクト記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","演算子記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","パッケージ記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","プロパティ記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","参照記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","スニペット記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","文字列記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","構造体記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","テキスト記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","パラメーター記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","単位記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。","変数記号の前景色。これらの記号は、アウトライン、階層リンク、および候補のウィジェットに表示されます。"],
"vs/editor/contrib/find/findController":["検索","検索(&&F)","選択範囲で検索","次を検索","次を検索","前を検索","前を検索","次の選択項目を検索","前の選択項目を検索","置換","置換(&&R)"],"vs/editor/contrib/find/findWidget":["検索","検索","前の検索結果","次の一致項目","選択範囲を検索","閉じる","置換","置換","置換","すべて置換","置換モードの切り替え","最初の {0} 件の結果だけが強調表示されますが、すべての検索操作はテキスト全体で機能します。","{0} / {1} 件","結果はありません。","{0} が見つかりました","{0} が {1} で見つかりました","{0} が {2} に {1} で見つかりました","{0} が {1} で見つかりました","Ctrl + Enter キーを押すと、すべて置換するのではなく、改行が挿入されるようになりました。editor.action.replaceAll のキーバインドを変更して、この動作をオーバーライドできます。"],"vs/editor/contrib/folding/folding":["展開","再帰的に展開する","折りたたみ","折りたたみの切り替え","再帰的に折りたたむ","すべてのブロック コメントの折りたたみ","すべての領域を折りたたむ","すべての領域を展開","すべて折りたたみ","すべて展開","レベル {0} で折りたたむ"],"vs/editor/contrib/fontZoom/fontZoom":["エディターのフォントを拡大","エディターのフォントを縮小","エディターのフォントのズームをリセット"],"vs/editor/contrib/format/format":["行 {0} で 1 つの書式設定を編集","行 {1} で {0} 個の書式設定を編集","行 {0} と {1} の間で 1 つの書式設定を編集","行 {1} と {2} の間で {0} 個の書式設定を編集"],"vs/editor/contrib/format/formatActions":["ドキュメントのフォーマット","選択範囲のフォーマット"],
"vs/editor/contrib/gotoError/gotoError":["次の問題 (エラー、警告、情報) へ移動","前の問題 (エラー、警告、情報) へ移動","ファイル内の次の問題 (エラー、警告、情報) へ移動","ファイル内の前の問題 (エラー、警告、情報) へ移動","次の問題箇所(&&P)","前の問題箇所(&&P)"],"vs/editor/contrib/gotoError/gotoErrorWidget":["{1} 件中 {0} 件の問題","問題 {0} / {1}","エディターのマーカー ナビゲーション ウィジェットのエラーの色。","エディターのマーカー ナビゲーション ウィジェットの警告の色。","エディターのマーカー ナビゲーション ウィジェットの情報の色。","エディターのマーカー ナビゲーション ウィジェットの背景。"],"vs/editor/contrib/gotoSymbol/goToCommands":["ピーク","定義","'{0}' の定義は見つかりません","定義が見つかりません","定義へ移動","定義に移動(&&D)","定義を横に開く","定義をここに表示","宣言","'{0}' の宣言が見つかりません","宣言が見つかりません","宣言へ移動","宣言へ移動(&&D)","'{0}' の宣言が見つかりません","宣言が見つかりません","宣言をここに表示","型定義","'{0}' の型定義が見つかりません","型定義が見つかりません","型定義へ移動","型定義に移動(&&T)","型定義を表示","実装","'{0}' の実装が見つかりません","実装が見つかりません","実装へ移動","実装箇所に移動","実装のピーク","'{0}' の参照が見つかりません","参照が見つかりません","参照へ移動","参照へ移動(&&R)","参照設定","参照をここに表示","参照設定","任意の記号へ移動","場所","'{0}' の結果がありません","参照設定"],"vs/editor/contrib/gotoSymbol/link/goToDefinitionAtPosition":["クリックして、{0} の定義を表示します。"],
"vs/editor/contrib/gotoSymbol/peek/referencesController":["読み込んでいます...","{0} ({1})"],"vs/editor/contrib/gotoSymbol/peek/referencesTree":["ファイルを解決できませんでした。","{0} 個の参照","{0} 個の参照"],"vs/editor/contrib/gotoSymbol/peek/referencesWidget":["プレビューを表示できません","参照設定","結果はありません。","参照設定"],"vs/editor/contrib/gotoSymbol/referencesModel":["列 {2} の {1} 行目に {0} つのシンボル","{0} に 1 個のシンボル、完全なパス {1}","{1} に {0} 個のシンボル、完全なパス {2}","一致する項目はありません","{0} に 1 個のシンボルが見つかりました","{1} に {0} 個のシンボルが見つかりました","{1} 個のファイルに {0} 個のシンボルが見つかりました"],"vs/editor/contrib/gotoSymbol/symbolNavigation":["{1} のシンボル {0}、次に {2}","シンボル {0}/{1}"],"vs/editor/contrib/hover/hover":["ホバーの表示","定義プレビューのホバーを表示する"],"vs/editor/contrib/hover/modesContentHover":["読み込んでいます...","問題を表示","クイックフィックスを確認しています...","利用できるクイックフィックスはありません","クイック フィックス..."],"vs/editor/contrib/inPlaceReplace/inPlaceReplace":["前の値に置換","次の値に置換"],
"vs/editor/contrib/linesOperations/linesOperations":["行を上へコピー","行を上へコピー(&&C)","行を下へコピー","行を下へコピー(&&P)","選択範囲の複製","選択範囲の複製(&&D)","行を上へ移動","行を上へ移動(&&V)","行を下へ移動","行を下へ移動(&&L)","行を昇順に並べ替え","行を降順に並べ替え","末尾の空白のトリミング","行の削除","行のインデント","行のインデント解除","行を上に挿入","行を下に挿入","左側をすべて削除","右側をすべて削除","行をつなげる","カーソルの周囲の文字を入れ替える","大文字に変換","小文字に変換","先頭文字を大文字に変換する"],"vs/editor/contrib/links/links":["コマンドの実行","リンク先を表示","cmd + クリック","ctrl + クリック","option + クリック","alt + クリック","このリンクは形式が正しくないため開くことができませんでした: {0}","このリンクはターゲットが存在しないため開くことができませんでした。","リンクを開く"],"vs/editor/contrib/message/messageController":["読み取り専用のエディターは編集できません"],"vs/editor/contrib/multicursor/multicursor":["カーソルを上に挿入","カーソルを上に挿入(&&A)","カーソルを下に挿入","カーソルを下に挿入(&&D)","カーソルを行末に挿入","カーソルを行末に挿入(&&U)","カーソルを下に挿入","カーソルを上に挿入","選択した項目を次の一致項目に追加","次の出現個所を追加(&&N)","選択項目を次の一致項目に追加","前の出現箇所を追加(&&R)","最後に選択した項目を次の一致項目に移動","最後に選んだ項目を前の一致項目に移動する","一致するすべての出現箇所を選択します","すべての出現箇所を選択(&&O)","すべての出現箇所を変更"],"vs/editor/contrib/parameterHints/parameterHints":["パラメーター ヒントをトリガー"],
"vs/editor/contrib/parameterHints/parameterHintsWidget":["{0}、ヒント"],"vs/editor/contrib/peekView/peekView":["閉じる","ピーク ビューのタイトル領域の背景色。","ピーク ビュー タイトルの色。","ピーク ビューのタイトル情報の色。","ピーク ビューの境界と矢印の色。","ピーク ビュー結果リストの背景色。","ピーク ビュー結果リストのライン ノードの前景色。","ピーク ビュー結果リストのファイル ノードの前景色。","ピーク ビュー結果リストの選択済みエントリの背景色。","ピーク ビュー結果リストの選択済みエントリの前景色。","ピーク ビュー エディターの背景色。","ピーク ビュー エディターの余白の背景色。","ピーク ビュー結果リストの一致した強調表示色。","ピーク ビュー エディターの一致した強調表示色。","ピーク ビュー エディターの一致した強調境界色。"],"vs/editor/contrib/rename/rename":["結果がありません。","名前変更の場所を解決しようとして不明なエラーが発生しました","'{0}' から '{1}' への名前変更が正常に完了しました。概要: {2}","名前の変更を実行できませんでした。","シンボルの名前変更"],"vs/editor/contrib/rename/renameInputField":["名前変更入力。新しい名前を入力し、Enter キーを押してコミットしてください。"],"vs/editor/contrib/smartSelect/smartSelect":["選択範囲を拡張","選択範囲の展開(&&E)","選択範囲を縮小","選択範囲の縮小(&&S)"],
"vs/editor/contrib/snippet/snippetVariables":["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日","日","月","火","水","木","金","土","1 月","2 月","3 月","4 月","5 月","6 月","7 月","8 月","9 月","10 月","11 月","12 月","1 月","2 月","3 月","4 月","5 月","6 月","7 月","8 月","9 月","10 月","11 月","12 月"],"vs/editor/contrib/suggest/suggestController":["{1} が追加編集した '{0}' を受け入れる","候補をトリガー"],"vs/editor/contrib/suggest/suggestWidget":["候補のウィジェットの背景色。","候補ウィジェットの境界線色。","候補ウィジェットの前景色。","候補ウィジェット内で選択済みエントリの背景色。","候補のウィジェット内で一致したハイライトの色。","詳細を表示...{0}","詳細を隠す...{0}","読み込んでいます...","読み込んでいます...","候補はありません。","アイテム {0}、ドキュメント: {1}"],"vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode":["Tab キーを切り替えるとフォーカスが移動します","Tab キーを押すと、次のフォーカス可能な要素にフォーカスを移動します","Tab キーを押すと、タブ文字が挿入されます"],"vs/editor/contrib/tokenization/tokenization":["開発者: トークン再作成の強制"],
"vs/editor/contrib/wordHighlighter/wordHighlighter":["変数の読み取りなど、読み取りアクセス中のシンボルの背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","変数への書き込みなど、書き込みアクセス中のシンボル背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","変数の読み取りなど読み取りアクセス中のシンボルの境界線の色。","変数への書き込みなど書き込みアクセス中のシンボルの境界線の色。","シンボルによって強調表示される概要ルーラーのマーカーの色。マーカーの色は、基になる装飾を隠さないように不透明以外にします。","書き込みアクセス シンボルを強調表示する概要ルーラーのマーカー色。下にある装飾を隠さないために、色は不透過であってはなりません。","次のシンボル ハイライトに移動","前のシンボル ハイライトに移動","シンボル ハイライトをトリガー"],"vs/platform/configuration/common/configurationRegistry":["既定の構成オーバーライド","言語に対して上書きされるエディター設定を構成します。","'{0}' を登録できません。これは、言語固有のエディター設定を記述するプロパティ パターン '\\\\[.*\\\\]$' に一致しています。'configurationDefaults' コントリビューションを使用してください。","'{0}' を登録できません。このプロパティは既に登録されています。"],"vs/platform/keybinding/common/abstractKeybindingService":["({0}) が押されました。2 番目のキーを待っています...","キーの組み合わせ ({0}、{1}) はコマンドではありません。"],
"vs/platform/list/browser/listService":["ワークベンチ","Windows および Linux 上の `Control` キーと macOS 上の `Command` キーに割り当てます。","Windows および Linux 上の `Alt` キーと macOS 上の `Option` キーに割り当てます。","マウスを使用して項目を複数選択するときに使用する修飾キーです (たとえば、エクスプローラーでエディターと scm ビューを開くなど)。'横に並べて開く' マウス ジェスチャー (がサポートされている場合) は、複数選択の修飾キーと競合しないように調整されます。","マウスを使用して、ツリー リスト内の項目を開く方法を制御します (サポートされている場合)。ツリー内の子を持つ親項目で、この設定は親項目をシングル クリックで展開するか、ダブル クリックで展開するかどうかを制御します。この設定の選択 (適応するかどうか) を無視するツリー リストがあることに注意してください。","リストやツリーがワークベンチの水平スクロールをサポートするかどうかを制御します。","ワークベンチでツリーが水平スクロールをサポートするかどうかを制御します。","この設定は推奨されていません。代わりに '{0}' を使用してください。","ツリーのインデントをピクセル単位で制御します。","ツリーでインシデントのガイドを表示する必要があるかどうかを制御します。","簡単なキーボード ナビゲーションは、キーボード入力に一致する要素に焦点を当てます。一致処理はプレフィックスでのみ実行されます。","キーボード ナビゲーションの強調表示を使用すると、キーボード入力に一致する要素が強調表示されます。上および下への移動は、強調表示されている要素のみを移動します。","キーボード ナビゲーションのフィルターでは、キーボード入力に一致しないすべての要素がフィルター処理され、非表示になります。","ワークベンチのリストおよびツリーのキーボード ナビゲーション スタイルを制御します。単純、強調表示、フィルターを指定できます。","リストやツリーでのキーボード ナビゲーションを、単に入力するだけで自動的にトリガーするかどうかを制御します。`false` に設定した場合、キーボード ナビゲーションは `list.toggleKeyboardNavigation` コマンドを実行したときにのみトリガーされます。これに対してキーボード ショートカットを割り当てることができます。"],
"vs/platform/markers/common/markers":["エラー","警告","情報"],
"vs/platform/theme/common/colorRegistry":["全体の前景色。この色は、コンポーネントによってオーバーライドされていない場合にのみ使用されます。","エラー メッセージ全体の前景色。この色は、コンポーネントによって上書きされていない場合にのみ使用されます。","フォーカスされた要素の境界線全体の色。この色はコンポーネントによって上書きされていない場合にのみ使用されます。","コントラストを強めるために、他の要素と隔てる追加の境界線。","コントラストを強めるために、アクティブな他要素と隔てる追加の境界線。","テキスト内のリンクの前景色。","テキスト内のコード ブロックの背景色。","エディター内の検索/置換窓など、エディター ウィジェットの影の色。","入力ボックスの背景。","入力ボックスの前景。","入力ボックスの境界線。","入力フィールドのアクティブ オプションの境界線の色。","入力フィールドでアクティブ化されたオプションの背景色。","情報の重大度を示す入力検証の背景色。","情報の重大度を示す入力検証の前景色。","情報の重大度を示す入力検証の境界線色。","警告の重大度を示す入力検証の背景色。","警告の重大度を示す入力検証の前景色。","警告の重大度を示す入力検証の境界線色。","エラーの重大度を示す入力検証の背景色。","エラーの重大度を示す入力検証の前景色。","エラーの重大度を示す入力検証の境界線色。","ドロップダウンの背景。","ドロップダウンの前景。","ラベルをグループ化するためのクリック選択の色。","境界線をグループ化するためのクイック選択の色。","バッジの背景色。バッジとは小さな情報ラベルのことです。例:検索結果の数","バッジの前景色。バッジとは小さな情報ラベルのことです。例:検索結果の数","ビューがスクロールされたことを示すスクロール バーの影。","スクロール バーのスライダーの背景色。","ホバー時のスクロール バー スライダー背景色。","クリック時のスクロール バー スライダー背景色。","時間のかかる操作で表示するプログレス バーの背景色。","エディターでエラーを示す波線の前景色。","エディター内のエラー ボックスの境界線の色です。","エディターで警告を示す波線の前景色。","エディターでの警告ボックスの境界線の色です。","エディターで情報を示す波線の前景色。","エディター内の情報ボックスの境界線の色です。","エディターでヒントを示す波線の前景色。","エディター内のヒント ボックスの境界線の色。","エディターの背景色。","エディターの既定の前景色。","検索/置換窓など、エディター ウィジェットの背景色。","検索/置換などを行うエディター ウィジェットの前景色。","エディター ウィジェットの境界線色。ウィジェットに境界線があり、ウィジェットによって配色を上書きされていない場合でのみこの配色は使用されます。","エディター ウィジェットのサイズ変更バーの境界線色。ウィジェットにサイズ変更の境界線があり、ウィジェットによって配色を上書きされていない場合でのみこの配色は使用されます。","エディターの選択範囲の色。","ハイ コントラストの選択済みテキストの色。","非アクティブなエディターの選択範囲の色。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","選択範囲の同じコンテンツの領域の色。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","選択範囲と同じコンテンツの境界線の色。","現在の検索一致項目の色。","その他の検索条件に一致する項目の色。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","検索を制限する範囲の色。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","現在の検索一致項目の境界線の色。","他の検索一致項目の境界線の色。","検索を制限する範囲の境界線色。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","ホバーが表示されている語の下を強調表示します。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","エディター ホバーの背景色。","エディター ホバーの前景色。","エディター ホバーの境界線の色。","エディターのホバーのステータス バーの背景色。","アクティブなリンクの色。","電球アクション アイコンに使用する色。","自動修正の電球アクション アイコンとして使用される色。","挿入されたテキストの背景色。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","削除したテキストの背景色。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","挿入されたテキストの輪郭の色。","削除されたテキストの輪郭の色。","2 つのテキスト エディターの間の境界線の色。","ツリーリストがアクティブのとき、フォーカスされた項目のツリーリスト背景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストがアクティブのとき、フォーカスされた項目のツリーリスト前景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストが非アクティブのとき、選択された項目のツリーリスト背景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストがアクティブのとき、選択された項目のツリーリスト前景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストが非アクティブのとき、選択された項目のツリーリスト背景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストが非アクティブのとき、選択された項目のツリーリスト前景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストが非アクティブのとき、フォーカスされた項目のツリーリスト背景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","マウス操作で項目をホバーするときのツリーリスト背景。","マウス操作で項目をホバーするときのツリーリスト前景。","マウス操作で項目を移動するときのツリーリスト ドラッグ アンド ドロップの背景。","ツリーリスト内を検索しているとき、一致した強調のツリーリスト前景色。","リストおよびツリーの型フィルター ウェジェットの背景色。","リストおよびツリーの型フィルター ウィジェットのアウトライン色。","一致項目がない場合の、リストおよびツリーの型フィルター ウィジェットのアウトライン色。","インデント ガイドのツリー ストロークの色。","メニューの境界線色。","メニュー項目の前景色。","メニュー項目の背景色。","メニューで選択されたメニュー項目の前景色。","メニューで選択されたメニュー項目の背景色。","メニューで選択されたメニュー項目の境界線色。","メニュー内のメニュー項目の境界線色。","スニペット tabstop の背景色を強調表示します。","スニペット tabstop の境界線の色を強調表示します。","スニペットの最後の tabstop の背景色を強調表示します。","スニペットの最後の tabstop の境界線の色を強調表示します。","検出された一致項目の概要ルーラー マーカーの色。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","選択範囲を強調表示するための概要ルーラー マーカーの色。この色は、基本装飾が非表示にならないよう不透明にすることはできません。","一致を検索するためのミニマップ マーカーの色。","エディターの選択範囲のミニマップ マーカーの色。","エラーのミニマップ マーカーの色。","警告のミニマップ マーカーの色。","問題のエラー アイコンに使用される色。","問題の警告アイコンに使用される色。","問題情報アイコンに使用される色。"]
});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.ja.js.map