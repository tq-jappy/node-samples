request = require 'request'
http = require 'http'

url = "http://tq-jappy.github.io/hello.txt"

describe 'HTTP Get', ->
  assert_response = (err, response, body, done) ->
     assert err is null
     assert response.statusCode is 200
     assert body is "hello\n"
     done() if done

  describe 'requestモジュールを使う場合、', ->
    it 'コンテンツが取得できる', (done) ->
      request url, (err, res, body) ->
        assert_response(err, res, body, done)

  describe 'httpモジュールを使う場合、', ->
    it 'コンテンツが取得できる', (done) ->
      http.get url, (res) ->
        body = ''
        res.setEncoding('utf8')

        res.on 'data', (chunk) ->
          body += chunk

        res.on 'end', ->
          assert_response(null, res, body, done)
      .on 'error', (err) ->
        assert_response(err, res, body, done)
