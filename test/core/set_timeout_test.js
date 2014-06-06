describe('setTimeout', function() {
  it('一定時間後に処理を実行', function(done) {
    var start = new Date().getTime();

    setTimeout(function() {
      var end = new Date().getTime();
      assert((end - start) >= 100);

      done();
    }, 100);
  });
});
