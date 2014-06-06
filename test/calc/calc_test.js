var assert = require('power-assert');

describe('Arithmetic', function() {
  beforeEach(function() {
    this.a = 12;
    this.b = 4;
  });

  describe('+', function() {
    it('should return sum of the values', function() {
      assert((this.a + this.b) === 16);
    });
  });
  
  describe('-', function() {
    it('should return difference of the values', function() {
      assert((this.a - this.b) === 8);
    });
  });
  
  describe('*', function() {
    it('should return product of the values', function() {
      assert((this.a * this.b) === 48);
    });
  });
  
  describe('/', function() {
    it('should return quotient of the values', function() {
      assert((this.a / this.b) === 3);
    });
  });
});
