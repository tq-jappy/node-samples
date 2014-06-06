describe('setInterval', function() {
  it('一定間隔で処理を実行', function(done) {
    var start = new Date().getTime();
    var counter = 0;

    setInterval(function() {
      counter++;

      if (counter == 10) {
        var end = new Date().getTime();
        assert((end - start) >= 100);
        done();
      }
    }, 10);
  });
});
