describe "String", ->
  describe "+は、", ->
    it "文字列を結合する", ->
      assert ("Hello" + " World!") is "Hello World!"

  describe "concatは、", ->
    it "文字列を結合する", ->
      assert "Hello".concat(" World!") is "Hello World!"

  describe "toUpperCaseは、", ->
    it "文字列を大文字に変換する", ->
      assert "abcABC123あいう".toUpperCase() is "ABCABC123あいう"

  describe "toLowerCaseは、", ->
    it "文字列を小文字に変換する", ->
      assert "abcABC123あいう".toLowerCase() is "abcabc123あいう"

  describe "charAtは、", ->
    it "n番目の文字を返す", ->
      assert "abcde".charAt(2) is "c"

  describe "substringは、", ->
    it "fromから to-1番目までの部分文字列を返す", ->
      assert "abcde".substring(1, 3) is "bc"

  describe "sliceは、", ->
    context "引数を2つ =from, to与えた時、", ->
      it "fromから to-1番目までの部分文字列を返す", ->
        assert "abcde".slice(1, 3) is "bc"

    context "引数を1つだけ =from与えた時、", ->
      it "fromから最後までの部分文字列を返す", ->
        assert "abcde".slice(1) is "bcde"

  describe "substrは、", ->
    context "引数を2つ =from, len与えた時、", ->
      it "fromからlen文字文の部分文字列を返す", ->
        assert "abcde".substr(1, 3) is "bcd"

    context "引数を1つだけ =from与えた時、", ->
      it "fromから最後までの部分文字列を返す", ->
        assert "abcde".substr(1) is "bcde"

  describe "splitは、", ->
    it "区切り文字で分割した配列を返す", ->
      actuals = "a:b:c".split ":"
      assert actuals.indexOf("a") is 0
      assert actuals.indexOf("b") is 1
      assert actuals.indexOf("c") is 2
      assert actuals.length is 3

  describe "replaceは、", ->
    context "正規表現式の後ろにgがない場合、", ->
      it "regexpに最初にマッチする部分を置き換えた文字列を返す", ->
        assert "abc123def".replace(/\d/, "*") is "abc*23def"

    context "正規表現式の後ろにgをつけた場合、", ->
      it "regexpにマッチする部分をすべて置き換えた文字列を返す", ->
        assert "abc123def".replace(/\d/g, "*") is "abc***def"

  describe "indexOfは、", ->
    context "引数1つ =keyの場合、", ->
      context "keyが文字列に含まれる場合、", ->
        it "最初に見つかった位置を返す", ->
          assert "abcabc".indexOf("c") is 2

      context "keyが文字列に含まれない場合、", ->
        it "-1を返す", ->
          assert "abcabcabc".indexOf("d") is -1

    context "引数2つ =key, fromの場合、", ->
      context "keyが文字列に含まれる場合、", ->
        it "from番目以降で最初に見つかった位置を返す", ->
          assert "abcabcabc".indexOf("c", 3) is 5

  describe "matchは、", ->
    it "正規表現式にマッチした文字列配列を返す", ->
      assert "abc123456def".match(/[\d]{2}/).length is 1
      assert "abc123456def".match(/[\d]{2}/)[0] is "12"

    context "正規表現にマッチしない場合、", ->
      it "nullを返す", ->
        assert "abc123456def".match(/xxx/) is null
