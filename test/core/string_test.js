describe("String", function() {
  describe("+は、", function() {
    it("文字列を結合する", function() {
      assert("Hello" + " World!" === "Hello World!");
    });
  });

  describe("concatは、", function() {
    it("文字列を結合する", function() {
      assert("Hello".concat(" World!") === "Hello World!");
    });
  });

  describe("toUpperCaseは、", function() {
    it("文字列を大文字に変換する", function() {
      assert("abcABC123あいう".toUpperCase() === "ABCABC123あいう");
    });
  });

  describe("toLowerCaseは、", function() {
    it("文字列を小文字に変換する", function() {
      assert("abcABC123あいう".toLowerCase() === "abcabc123あいう");
    });
  });

  describe("charAtは、", function() {
    it("n番目の文字を返す", function() {
      assert("abcde".charAt(2) === "c");
    });
  });

  describe("substringは、", function() {
    it("fromから(to-1)番目までの部分文字列を返す", function() {
      assert("abcde".substring(1, 3) === "bc");
    });
  });

  describe("sliceは、", function() {
    context("引数を2つ(=from, to)与えた時、", function() {
      it("fromから(to-1)番目までの部分文字列を返す", function() {
        assert("abcde".slice(1, 3) === "bc");
      });
    });

    context("引数を1つだけ(=from)与えた時、", function() {
      it("fromから最後までの部分文字列を返す", function() {
        assert("abcde".slice(1) === "bcde");
      });
    });
  });

  describe("substrは、", function() {
    context("引数を2つ(=from, len)与えた時、", function() {
      it("fromからlen文字文の部分文字列を返す", function() {
        assert("abcde".substr(1, 3) === "bcd");
      });
    });

    context("引数を1つだけ(=from)与えた時、", function() {
      it("fromから最後までの部分文字列を返す", function() {
        assert("abcde".substr(1) === "bcde");
      });
    });
  });

  describe("splitは、", function() {
    it("区切り文字で分割した配列を返す", function() {
      var actuals = "a:b:c".split(":");
      assert(actuals.indexOf("a") === 0);
      assert(actuals.indexOf("b") === 1);
      assert(actuals.indexOf("c") === 2);
      assert(actuals.length === 3);
    });
  });

  describe("replaceは、", function() {
    context("正規表現式の後ろにgがない場合、", function() {
      it("regexpに最初にマッチする部分を置き換えた文字列を返す", function() {
        assert("abc123def".replace(/\d/, "*") === "abc*23def");
      });
    });

    context("正規表現式の後ろにgをつけた場合、", function() {
      it("regexpにマッチする部分をすべて置き換えた文字列を返す", function() {
        assert("abc123def".replace(/\d/g, "*") === "abc***def");
      });
    });
  });

  describe("indexOfは、", function() {
    context("引数1つ(=key)の場合、", function() {
      context("keyが文字列に含まれる場合、", function() {
        it("最初に見つかった位置を返す", function() {
          assert("abcabc".indexOf("c") === 2);
        });
      });

      context("keyが文字列に含まれない場合、", function() {
        it("-1を返す", function() {
          assert("abcabcabc".indexOf("d") === -1);
        });
      });
    });

    context("引数2つ(=key, from)の場合、", function() {
      context("keyが文字列に含まれる場合、", function() {
        it("from番目以降で最初に見つかった位置を返す", function() {
          assert("abcabcabc".indexOf("c", 3) === 5);
        });
      });
    });
  });

  describe("matchは、", function() {
    it("正規表現式にマッチした文字列配列を返す", function() {
      assert("abc123456def".match(/[\d]{2}/).length === 1);
      assert("abc123456def".match(/[\d]{2}/)[0] === "12");
    });

    context("正規表現にマッチしない場合、", function() {
      it("nullを返す", function() {
        assert("abc123456def".match(/xxx/) === null);
      });
    });
  });
});
