var fs = require('fs'),
    path = require('path');

var fixture_path = "./test/fixtures/fs_test";

describe('fs', function() {
  describe('readFile', function() {
    context('encodintオプションを渡した場合、', function() {
      it('ファイルの中身をStringで返す', function(done) {
        fs.readFile(path.join(fixture_path, 'foo.txt'), { encoding: 'utf8' }, function(err, data) {
          assert(err === null);
          assert(data === "foo\n");
          done();
        });
      });
    });

    context("存在しないファイルパスを渡した場合、", function() {
      it('Error::ENOENTエラーを返す', function(done) {
        fs.readFile(path.join(fixture_path, 'not_found'), function(err, data) {
          assert(err.code === "ENOENT");
          done();
        });
      });
    });
  });

  describe('readFileSync', function() {
    context("encodingオプションを渡した場合、", function() {
      it('ファイルの中身をStringで返す', function() {
        var data = fs.readFileSync(path.join(fixture_path, 'foo.txt'), { encoding: 'utf8' });
        assert(data === "foo\n");
      });
    });

    context("存在しないファイルパスを渡した場合、", function() {
      it('Error.ENOENTがスローされる', function() {
        try {
          fs.readFileSync(path.join(fixture_path, 'not_found'));
          assert(1 === 0);
        } catch(e) {
          assert(e.code === "ENOENT");
        }
      });
    });
  });

  describe('readdir', function() {
    it('ディレクトリにあるファイルパスを配列で返す', function(done) {
      fs.readdir(fixture_path, function(err, files) {
        assert(files.indexOf('foo.txt') === 0);
        assert(files.indexOf('xxx.txt') < 0);
        done();
      });
    });
  });

  describe('readdirSync', function() {
    it('ディレクトリにあるファイルパスを配列で返す', function() {
      var files = fs.readdirSync(fixture_path);

      assert(files.indexOf('foo.txt') === 0);
      assert(files.indexOf('xxx.txt') < 0);
    });
  });
});
