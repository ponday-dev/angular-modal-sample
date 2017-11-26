# Anguarモーダルダイアログサンプル
Angularによるモーダルダイアログのサンプル（Quramyさんの以下記事を参考に作成）
以下変更点
+ モーダルを開くときに引数を受け取れるように変更
+ 開いているモーダルがあるかのフラグをbooleanからSubject<boolean>に変更
+ 戻り値をPromiseからObservableに変更

## 参考
[Angular2でModal作る - Quramy](http://qiita.com/Quramy/items/ccfcfa0e45dd9e43f041)
