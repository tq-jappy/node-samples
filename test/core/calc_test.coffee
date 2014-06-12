describe 'Calc', ->
  beforeEach ->
    this.a = 12
    this.b = 4

  describe '+', ->
    it 'should return sum of the values', ->
      assert (this.a + this.b) is 16
  
  describe '-', ->
    it 'should return difference of the values', ->
      assert (this.a - this.b) is 8
  
  describe '*', ->
    it 'should return product of the values', ->
      assert (this.a * this.b) is 48
  
  describe '/', ->
    it 'should return quotient of the values', ->
      assert (this.a / this.b) is 3
