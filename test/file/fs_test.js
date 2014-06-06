var fs = require('fs');

var fixture_path = "./test/fixtures/fs_test";

describe('fs', function() {
  describe('readdir', function() {
    it('should return an array of paths in the directory asynchronously', function(done) {
      fs.readdir(fixture_path, function(err, files) {
        assert(files.indexOf('foo.txt') === 0);
        assert(files.indexOf('xxx.txt') < 0);
        done();
      });
    });
  });

  describe('readdirSync', function() {
    it('should return an array of paths in the directory', function() {
      var files = fs.readdirSync(fixture_path);

      assert(files.indexOf('foo.txt') === 0);
      assert(files.indexOf('xxx.txt') < 0);
    });
  });
});
