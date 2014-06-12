fs = require('fs')
path = require('path')

fixture_path = "./test/fixtures/fs_test"

describe 'fs', ->
  describe 'readFile', ->
    context 'encodintオプションを渡した場合、', ->
      it 'ファイルの中身をStringで返す', (done) ->
        fs.readFile path.join(fixture_path, 'foo.txt'), { encoding: 'utf8' }, (err, data) ->
          assert err is null
          assert data is "foo\n"
          done()

    context "存在しないファイルパスを渡した場合、", ->
      it 'Error::ENOENTエラーを返す', (done) ->
        fs.readFile path.join(fixture_path, 'not_found'), (err, data) ->
          assert err.code is "ENOENT"
          done()

  describe 'readFileSync', ->
    context "encodingオプションを渡した場合、", ->
      it 'ファイルの中身をStringで返す', ->
        data = fs.readFileSync(path.join(fixture_path, 'foo.txt'), { encoding: 'utf8' })
        assert data is "foo\n"

    context "存在しないファイルパスを渡した場合、", ->
      it 'Error.ENOENTがスローされる', ->
        try
          fs.readFileSync(path.join(fixture_path, 'not_found'))
          assert 1 is 0
        catch e
          assert e.code is "ENOENT"

  describe 'readdir', ->
    it 'ディレクトリにあるファイルパスを配列で返す', (done) ->
      fs.readdir fixture_path, (err, files) ->
        assert files.indexOf('foo.txt') is 0
        assert files.indexOf('xxx.txt') < 0
        done()

  describe 'readdirSync', ->
    it 'ディレクトリにあるファイルパスを配列で返す', ->
      files = fs.readdirSync(fixture_path)

      assert files.indexOf('foo.txt') is 0
      assert files.indexOf('xxx.txt') < 0
