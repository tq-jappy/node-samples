var request = require('request'),
    http = require('http');

var url = "http://tq-jappy.github.io/hello.txt"

describe('HTTP Get', function() {
  function assert_response(err, response, body, done) {
     assert(err === null);
     assert(response.statusCode === 200);
     assert(body === "hello\n");
     if (done) { done(); }
  }

  describe('requestモジュールを使う場合、', function() {
    it('コンテンツが取得できる', function(done) {
      request(url, function(err, res, body) {
        assert_response(err, res, body, done)
      });
    });
  });

  describe('httpモジュールを使う場合、', function() {
    it('コンテンツが取得できる', function(done) {
      http.get(url, function(res) {
        var body = '';
        res.setEncoding('utf8');

        res.on('data', function(chunk) {
          body += chunk;
        });

        res.on('end', function() {
          assert_response(null, res, body, done);
        });
      }).on('error', function(err) {
        assert_response(err, res, body, done);
      });
    });
  });
});
